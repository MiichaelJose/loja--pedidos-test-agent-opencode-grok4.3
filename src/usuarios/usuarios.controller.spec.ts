import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsuariosModule } from './usuarios.module';

describe('UsuariosController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsuariosModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/usuarios (POST)', () => {
    return request(app.getHttpServer())
      .post('/usuarios')
      .send({ nome: 'João', email: 'joao@test.com', senha: '123456' })
      .expect(201);
  });
});
