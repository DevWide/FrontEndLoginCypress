describe('Login - Credenciais Válidas', () => {
    let userData; // Variável para armazenar os dados do usuário
  
    before(() => {
      // Cria um usuário via API antes do teste
      cy.createUser().then((user) => {
        userData = user; // Armazena os dados retornados
      });
    });
  
    it('Deve logar com sucesso e redirecionar para o dashboard', () => {
      // Usa os dados do usuário para login
      cy.login(userData.email, userData.password);
  
      // Assertivas
      cy.url().should('eq', 'https://front.serverest.dev/admin/home'); // Valida a URL do dashboard
      cy.contains(`Bem Vindo ${userData.name}`).should('be.visible'); // Valida a mensagem de boas-vindas
    });
  });
  


