Cypress.Commands.add('login', (email, password) => {
  cy.visit('/sign-in');
  cy.get('#basic_email').type(email);
  cy.get('#basic_password').type(password);
  cy.get('button[type="submit"]').click();
});
