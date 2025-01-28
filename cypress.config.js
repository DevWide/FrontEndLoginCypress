const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev', // URL base do projeto
    supportFile: 'cypress/support/e2e.js', // Arquivo de suporte
    viewportWidth: 1280, // Largura padrão do viewport
    viewportHeight: 720, // Altura padrão do viewport
    defaultCommandTimeout: 8000, // Timeout padrão para comandos
    requestTimeout: 10000, // Timeout padrão para requisições
    responseTimeout: 10000, // Timeout padrão para respostas
    retries: {
      runMode: 2, // Tentativas em execução no terminal
      openMode: 0, // Tentativas no modo interativo
    },
    specPattern: 'cypress/e2e/**/*.spec.js', // Define o padrão dos arquivos de teste
  },
});

