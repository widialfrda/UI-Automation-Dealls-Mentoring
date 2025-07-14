describe('Mentors are listed', () => {
  beforeEach(() => {
    cy.viewport(1920, 960);
    cy.fixture('userData').then((user) => {
      cy.login(user.email, user.password);
    });
  });

  it('Should Display Mentor List', () => {
    cy.xpath('(//a[contains(text(), "Mentoring")])').click();
    cy.url().should('include', '/mentoring');
    cy.wait(1000);
    cy.scrollTo('bottom');
    cy.wait(3000);
    cy.scrollTo('top');
    cy.xpath('(//a[contains(text(), "Akademik")])').click();
  });
});
