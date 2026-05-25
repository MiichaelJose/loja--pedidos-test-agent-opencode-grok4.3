import { ThrottlerStorage } from '@nestjs/throttler';
import { RedisClientType, createClient } from 'redis';

interface ThrottlerStorageRecord {
  totalHits: number;
  timeToExpire: number;
  isBlocked: boolean;
  timeToBlockExpire: number;
}

export class RedisThrottlerStorage implements ThrottlerStorage {
  private redis: RedisClientType;

  constructor(redisUrl: string = 'redis://localhost:6379') {
    this.redis = createClient({ url: redisUrl });
    this.redis.connect().catch(console.error);
  }

  async increment(
    key: string,
    ttl: number,
    limit: number,
    blockDuration: number,
    throttlerName: string,
  ): Promise<ThrottlerStorageRecord> {
    const fullKey = `${throttlerName}:${key}`;

    const multi = this.redis.multi();
    multi.incr(fullKey);
    multi.expire(fullKey, ttl, 'NX');
    const results = await multi.exec();

    const totalHits = Number(results?.[0] ?? 1);
    const timeToExpire = await this.redis.ttl(fullKey);

    const isBlocked = totalHits > limit;
    const timeToBlockExpire = isBlocked ? blockDuration : 0;

    return {
      totalHits,
      timeToExpire: timeToExpire > 0 ? timeToExpire : ttl,
      isBlocked,
      timeToBlockExpire,
    };
  }
}
