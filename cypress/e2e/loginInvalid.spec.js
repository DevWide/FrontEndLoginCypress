describe('Login - Credenciais Inválidas', () => {
  it('Deve exibir mensagem de erro ao logar com dados inválidos', () => {
    cy.fixture('credentials').then((creds) => {
      const { email, password } = creds.invalidUser; // Dados inválidos do fixture

      cy.visit('/login'); // Acessa a página de login

      // Preenche os campos com dados inválidos
      cy.get('input[name="email"]').type(email); // E-mail inválido
      cy.get('input[name="password"]').type(password); // Senha inválida

      // Clica no botão de login
      cy.get('button[type="submit"]').click();

      // Valida a mensagem de erro exibida
      cy.get('.alert').should('contain', 'Email e/ou senha inválidos'); // Valida o texto da mensagem

      // Garante que continua na página de login
      cy.url().should('include', '/login');
    });
  });
});

