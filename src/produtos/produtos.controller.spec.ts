import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ProdutosModule } from './produtos.module';
import { CategoriasModule } from '../categorias/categorias.module';
import { LojasModule } from '../lojas/lojas.module';

describe('ProdutosController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProdutosModule, CategoriasModule, LojasModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/produtos (POST) should fail without valid categoria/loja', () => {
    return request(app.getHttpServer())
      .post('/produtos')
      .send({ nome: 'Test', preco: 10, categoriaId: 99, lojaId: 99 })
      .expect(400);
  });
});
