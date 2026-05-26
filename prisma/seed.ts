import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes (cuidado em produção!)
  // Nota: deleteMany requer que o MongoDB esteja rodando como Replica Set
  try {
    await prisma.pedido.deleteMany();
    await prisma.produto.deleteMany();
    await prisma.categoria.deleteMany();
    await prisma.loja.deleteMany();
    await prisma.usuario.deleteMany();
  } catch (error) {
    console.warn('⚠️  Aviso ao limpar dados (pode ser normal se o banco estiver vazio):', error.message);
  }

  // === USUÁRIOS ===
  const usuarios = await prisma.usuario.createMany({
    data: [
      {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        senha: '123456', // Em produção usar hash
      },
      {
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        senha: '123456',
      },
      {
        nome: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        senha: '123456',
      },
    ],
  });

  // === LOJAS ===
  const lojaCentro = await prisma.loja.create({
    data: {
      nome: 'Loja Centro',
      cidade: 'São Paulo',
      endereco: 'Rua da Consolação, 1234',
    },
  });

  const lojaNorte = await prisma.loja.create({
    data: {
      nome: 'Loja Norte',
      cidade: 'Rio de Janeiro',
      endereco: 'Av. Brasil, 5678',
    },
  });

  // === CATEGORIAS ===
  const categoriaEletronicos = await prisma.categoria.create({
    data: {
      nome: 'Eletrônicos',
      descricao: 'Produtos eletrônicos e tecnologia',
    },
  });

  const categoriaRoupas = await prisma.categoria.create({
    data: {
      nome: 'Roupas',
      descricao: 'Vestuário masculino e feminino',
    },
  });

  const categoriaCasa = await prisma.categoria.create({
    data: {
      nome: 'Casa e Decoração',
      descricao: 'Itens para casa e decoração',
    },
  });

  // === PRODUTOS ===
  const produtos = [
    {
      nome: 'Notebook Dell Inspiron',
      preco: 3499.9,
      categoriaId: categoriaEletronicos.id,
      lojaId: lojaCentro.id,
    },
    {
      nome: 'Smartphone Samsung Galaxy',
      preco: 1899.0,
      categoriaId: categoriaEletronicos.id,
      lojaId: lojaCentro.id,
    },
    {
      nome: 'Camiseta Nike Dry Fit',
      preco: 129.9,
      categoriaId: categoriaRoupas.id,
      lojaId: lojaNorte.id,
    },
    {
      nome: 'Tênis Adidas Runfalcon',
      preco: 299.9,
      categoriaId: categoriaRoupas.id,
      lojaId: lojaNorte.id,
    },
    {
      nome: 'Luminária de Mesa LED',
      preco: 89.9,
      categoriaId: categoriaCasa.id,
      lojaId: lojaCentro.id,
    },
    {
      nome: 'Jogo de Panelas Inox',
      preco: 249.9,
      categoriaId: categoriaCasa.id,
      lojaId: lojaNorte.id,
    },
  ];

  for (const produto of produtos) {
    await prisma.produto.create({ data: produto });
  }

  // === PEDIDOS ===
  await prisma.pedido.createMany({
    data: [
      {
        cliente: 'Ana Costa',
        produto: 'Notebook Dell Inspiron',
        quantidade: 1,
        status: 'pendente',
      },
      {
        cliente: 'Carlos Mendes',
        produto: 'Camiseta Nike Dry Fit',
        quantidade: 3,
        status: 'entregue',
      },
      {
        cliente: 'Beatriz Lima',
        produto: 'Smartphone Samsung Galaxy',
        quantidade: 1,
        status: 'enviado',
      },
    ],
  });

  console.log('✅ Seed concluído com sucesso!');
  console.log('📦 Dados inseridos: Usuários, Lojas, Categorias, Produtos e Pedidos.');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
