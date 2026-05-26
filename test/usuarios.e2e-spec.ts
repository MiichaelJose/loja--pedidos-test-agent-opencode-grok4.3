import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Usuarios (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Limpa a coleção de usuários antes de cada teste
    await prisma.usuario.deleteMany();
  });

  it('/usuarios (POST)', () => {
    return request(app.getHttpServer())
      .post('/usuarios')
      .send({
        nome: 'Test User',
        email: 'test-e2e@example.com',
        senha: '123456',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.email).toBe('test-e2e@example.com');
      });
  });

  it('/usuarios (GET)', async () => {
    await prisma.usuario.create({
      data: {
        nome: 'Test User',
        email: 'get-test@example.com',
        senha: '123456',
      },
    });

    return request(app.getHttpServer())
      .get('/usuarios')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
      });
  });
});
