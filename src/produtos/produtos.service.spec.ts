import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';
import { CategoriasService } from '../categorias/categorias.service';
import { LojasService } from '../lojas/lojas.service';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosService, CategoriasService, LojasService],
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
