# Cypress Test Project - Login Serverest

Este projeto contém testes end-to-end (E2E) automatizados com [Cypress](https://www.cypress.io/) para a aplicação [Serverest](https://front.serverest.dev/login). O foco dos testes está na funcionalidade de login.

## Estrutura do Projeto

- **cypress/e2e**: Contém os cenários de teste E2E:
  - `loginValid.spec.js`: Testa login com credenciais válidas.
  - `loginInvalid.spec.js`: Testa login com credenciais inválidas.
  - `emptyFields.spec.js`: Testa validações para campos obrigatórios.
- **cypress/fixtures**: Contém os dados de teste estáticos, como credenciais.
- **cypress/support**: Arquivos de suporte com comandos customizados e configurações globais.
- **cypress.config.js**: Configurações globais do Cypress.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) para geração de dados dinâmicos nos testes.
- [pnpm](https://pnpm.io/) como gerenciador de pacotes.

## Pré-requisitos

- Node.js v14 ou superior
- pnpm instalado globalmente:
```
  npm install -g pnpm
```

## Instalação do Projeto
1. Clone o repositório:
```
git clone https://github.com/DevWide/FrontEndLoginCypress.git
```

2. Acesse o diretório do projeto:
```
cd PROJETO_TEC2_CLOUD
```

3. Instale as dependências:
```
pnpm install
```

## Como Rodar os Testes

### Modo Interativo (para desenvolvimento)
Abra o Cypress no modo interativo:

```
pnpm exec cypress open
```

### Modo Headless (para integração contínua)
Rode todos os testes no modo headless:
```
pnpm exec cypress run
```

## Teste no GitHub Actions
Os testes são executados automaticamente no GitHub Actions sempre que há um push ou pull request para a branch main. O arquivo de workflow .github/workflows/cypress.yml está configurado para rodar os testes no modo headless em um ambiente CI.

## Configuração Adicional
### Geração de Dados com Faker.js
O comando createUser utiliza a biblioteca Faker.js para gerar dados aleatórios nos testes. Isso evita duplicação de dados e garante independência entre os testes.

### Configuração do .gitignore
O arquivo .gitignore está configurado para ignorar:

* node_modules/
* cypress/videos/ (gravações dos testes)
* cypress/screenshots/ (capturas de tela dos testes)






