const pickIndex = [1, 2];

describe('User can Book Mentoring Session', () => {
  beforeEach(() => {
    cy.viewport(1920, 960);
    cy.fixture('userData').then((user) => {
      cy.login(user.email, user.password);
    });
  });

  it('Should successfully make a booking schedule', () => {
    // Masuk menu mentoring
    cy.xpath('(//a[contains(text(), "Mentoring")])')
      .should('be.visible')
      .click();
    cy.url().should('include', '/mentoring');
    cy.scrollTo('top');

    // Klik mentor pertama
    cy.xpath('(//a[contains(@class, "MentorCard_mentor_card")])[1]')
      .should('be.visible')
      .click();

    // Klik "Ajukan Jadwal"
    cy.xpath('//button[contains(text(), "Ajukan Jadwal")]')
      .should('be.visible')
      .click();

    // Klik pilihan slot
    pickIndex.forEach((index) => {
      cy.wait(1000);
      cy.xpath(`(//button[contains(@class, "rounded-lg")])[${index}]`)
        .should('be.visible')
        .click();
    });

    // Klik tombol request session
    cy.xpath('//*[@id="mentoring-schedule-topic-request-session-btn"]')
      .should('be.visible')
      .click();

    // Membuka date picker
    cy.xpath('//button[.//div[text()="Select Date Range"]]').click();

    // Memilih 2 tanggal available berbeda
    cy.get('.rmdp-day:not(.rmdp-disabled)', { timeout: 10000 })
    .filter(':visible')
    .then($dates => {
        const totalDates = $dates.length;
        cy.log(`Total tanggal available: ${totalDates}`);

        if (totalDates >= 2) {
        cy.wrap($dates[0]).click();
        cy.wait(500);
        cy.wrap($dates[1]).click();
        }
    });

    cy.get('#proposedTimes_0_startTime')
    .should('be.visible')
    .clear()
    .type('09:00');

    cy.get('#proposedTimes_0_endTime')
    .should('be.visible')
    .clear()
    .type('10:00');

  });
});
