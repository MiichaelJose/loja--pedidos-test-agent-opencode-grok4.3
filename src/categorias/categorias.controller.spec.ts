import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CategoriasModule } from './categorias.module';

describe('CategoriasController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CategoriasModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/categorias (POST)', () => {
    return request(app.getHttpServer())
      .post('/categorias')
      .send({ nome: 'Eletrônicos' })
      .expect(201);
  });
});
