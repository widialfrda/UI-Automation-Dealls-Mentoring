const mentorName = "ikut INMF";

describe('Searched Mentor is Displayed', () => {
  beforeEach(() => {
    cy.viewport(1920, 960);
    cy.fixture('userData').then((user) => {
      cy.login(user.email, user.password);
    });
  });

  it('Should Display Mentor List', () => {
    cy.xpath('(//a[contains(text(), "Mentoring")])')
      .should('be.visible')
      .click();
    cy.url().should('include', '/mentoring');
    cy.scrollTo('top');
    cy.get('#searchMentor').should('be.visible').clear().type("al");
    cy.xpath('(//a[contains(@class, "MentorCard_mentor_card")])[1]')
      .should('be.visible')
      .click();
    cy.go('back');
    cy.scrollTo('top');
    cy.get('#searchMentor').clear().type(mentorName);
    cy.xpath('(//a[contains(@class, "MentorCard_mentor_card")])[1]')
      .should('be.visible')
      .click();
    cy.xpath(`(//*[contains(text(), "${mentorName}")])[3]`)
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        cy.log(`Mentor name found: ${text.trim()}`);
        expect(text.trim()).to.eq(mentorName);
      });
  });
});
