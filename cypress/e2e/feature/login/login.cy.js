describe('User Login', () => {
  beforeEach(function () {
    cy.fixture('userData').as('userData');
    cy.visit('/sign-in');
  });

  it('User can login with valid credentials', function () {
    const email = this.userData.email;
    const password = this.userData.password;

    cy.get('#basic_email').type(email);
    cy.get('#basic_password').type(password);
    cy.get('button[type="submit"]').click();

    // cy.url().should('include', '/dashboard');
    // cy.contains('Welcome').should('be.visible');
  });
});
//*[@id="basic_email"]