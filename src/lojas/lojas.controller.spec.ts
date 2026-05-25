import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { LojasModule } from './lojas.module';

describe('LojasController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LojasModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/lojas (POST)', () => {
    return request(app.getHttpServer())
      .post('/lojas')
      .send({ nome: 'Loja Test', cidade: 'SP', endereco: 'Rua X' })
      .expect(201);
  });
});
