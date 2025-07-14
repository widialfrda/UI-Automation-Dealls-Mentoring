const mentorName = "ikut INMF";
describe('Searched Mentor is Displayed', () => {
  beforeEach(() => {
    cy.viewport(1920, 960);
    cy.fixture('userData').then((user) => {
      cy.login(user.email, user.password);
    });
  });

  it('Should Display Mentor List', () => {
    cy.wait(3000);
    cy.xpath('(//a[contains(text(), "Mentoring")])').click();
    cy.url().should('include', '/mentoring');
    cy.scrollTo('top');
    cy.get('#searchMentor').type("a");
    cy.get('#searchMentor').clear();
    cy.get('#searchMentor').type("al");
    cy.xpath('(//a[contains(@class, "MentorCard_mentor_card")])[1]').click();
    cy.go('back');
    cy.scrollTo('top');
    cy.get('#searchMentor').clear();
    cy.wait(3000);
    cy.get('#searchMentor').type(mentorName);
    cy.wait(3000);
    cy.xpath('(//a[contains(@class, "MentorCard_mentor_card")])[1]').click();
    cy.wait(5000);
    cy.xpath(`(//*[contains(text(), "ikut INMF")])[3]`)
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      cy.log(text);
      expect(text.trim()).to.eq('ikut INMF');
    });
    });
});
