const { faker } = require('@faker-js/faker'); // Importa o Faker

Cypress.Commands.add('createUser', () => {
  const name = faker.name.fullName(); // Gera um nome aleatório
  const email = faker.internet.email(); // Gera um e-mail aleatório
  const password = faker.internet.password(); // Gera uma senha aleatória

  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
      nome: name,
      email: email,
      password: password,
      administrador: 'true', // Define o usuário como administrador
    },
  }).then((response) => {
    expect(response.status).to.eq(201); // Valida que o usuário foi criado
    return { name, email, password }; // Retorna os dados do usuário
  });
});


Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login'); // Acessa a página de login
  cy.get('input[name="email"]').type(email); // Preenche o email
  cy.get('input[name="password"]').type(password); // Preenche a senha
  cy.get('button[type="submit"]').click(); // Clica no botão "Entrar"
});

Cypress.Commands.add('validateErrorMessage', (message) => {
  cy.contains(message).should('be.visible'); // Verifica se a mensagem está visível
});

Cypress.Commands.add('assertRedirection', (urlPath) => {
  cy.url().should('include', urlPath); // Valida redirecionamento para URL específica
});
