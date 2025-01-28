describe('Login - Campos Obrigatórios', () => {
  // Cenário 1: Apenas o campo de e-mail vazio
  it('Deve exibir erro ao deixar apenas o e-mail vazio', () => {
    cy.visit('/login');

    // Preenche apenas o campo de senha
    cy.get('input[name="password"]').type('senha_teste123');

    // Tenta fazer login
    cy.get('button[type="submit"]').click();

    // Valida a mensagem de erro para o campo de e-mail
    cy.get('.alert').should('contain', 'Email é obrigatório');
  });

  // Cenário 2: Apenas o campo de senha vazio
  it('Deve exibir erro ao deixar apenas a senha vazia', () => {
    cy.visit('/login');

    // Preenche apenas o campo de e-mail
    cy.get('input[name="email"]').type('usuario_teste@email.com');

    // Tenta fazer login
    cy.get('button[type="submit"]').click();

    // Valida a mensagem de erro para o campo de senha
    cy.get('.alert').should('contain', 'Password é obrigatório');
  });
});

