describe('index page', () => {
  it('renders My Contacts button', () => {
    cy.visit('/');

    cy.contains('+ My Contacts');
  });

  it('shows the My Contacts section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Contacts').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Contacts');
    cy.contains('448 Neptune Ave').should('be.visible');
    cy.contains('Apt. 16G').should('be.visible');
    cy.contains('Brooklyn,').should('be.visible');
    cy.contains('NY').should('be.visible');
    cy.contains('11224').should('be.visible');
    cy.contains('1-(646)-331-4725').should('be.visible');
    cy.contains('dmitriy.zutler@gmail.com').should('be.visible');
    cy.contains('http://www.linkedin.com/in/zutler').should('be.visible');
  });

  it('hides the My Contacts section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Contacts').click();
    cy.contains('- My Contacts').click();
    cy.contains('+ My Contacts');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('448 Neptune Ave').should('not.be.visible');
    cy.contains('Apt. 16G').should('not.be.visible');
    cy.contains('Brooklyn,').should('not.be.visible');
    cy.contains('NY').should('not.be.visible');
    cy.contains('11224').should('not.be.visible');
    cy.contains('1-(646)-331-4725').should('not.be.visible');
    cy.contains('dmitriy.zutler@gmail.com').should('not.be.visible');
    cy.contains('http://www.linkedin.com/in/zutler').should('not.be.visible');
  });

  it('renders My Skills button', () => {
    cy.visit('/');

    cy.contains('+ My Skills');
  });

  it('renders My Experience button', () => {
    cy.visit('/');

    cy.contains('+ My Experience');
  });

  it('renders My Education button', () => {
    cy.visit('/');

    cy.contains('+ My Education');
  });
});
