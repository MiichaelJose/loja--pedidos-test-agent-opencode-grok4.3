import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await service.create({ nome: 'Test', email: 'test@test.com', senha: '123456' });
    expect(user.nome).toBe('Test');
    expect(user.email).toBe('test@test.com');
  });
});
