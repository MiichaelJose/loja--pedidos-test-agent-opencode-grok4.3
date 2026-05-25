module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'build',
        'ci',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'pedidos',
        'usuarios',
        'lojas',
        'categorias',
        'produtos',
        'docs',
        'deps',
        'config',
      ],
    ],
  },
};
