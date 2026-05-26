import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = {
  usuario: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('UsuariosService', () => {
  let service: UsuariosService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuariosService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const dto = { nome: 'Test', email: 'test@test.com', senha: '123456' };
    const expected = { id: 'abc123', ...dto };

    mockPrismaService.usuario.create.mockResolvedValue(expected);

    const user = await service.create(dto);

    expect(user.nome).toBe('Test');
    expect(user.email).toBe('test@test.com');
    expect(mockPrismaService.usuario.create).toHaveBeenCalledWith({ data: dto });
  });
});
