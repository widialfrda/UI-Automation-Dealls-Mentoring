Cypress.Commands.add('login', (email, password) => {
    cy.visit('/sign-in');
    cy.get('#basic_email').type(email);
    cy.get('#basic_password').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('fillNotesField', (noteText) => {
    cy.get('#notes')
        .should('be.visible')
        .clear()
        .type(noteText, { delay: 0 });
});

Cypress.Commands.add('verifyNotesField', (expectedText) => {
    cy.get('#notes')
        .should('be.visible')
        .invoke('val')
        .then(actualText => {
            expect(actualText.trim()).to.eq(expectedText.trim());
        });
});
