describe('first job', () => {
  it('renders the first job details', () => {
    cy.visit('/jobs/1');
    cy.get('h3').contains('Bank of America, Merrill Lynch');
    cy.get('h4').contains('VP Software Developer (UI)');
    cy.contains('07/2017');
    cy.contains('Present');
    cy.get('ul').children().should('have.length', 9);
  });

  it('renders the second job details', () => {
    cy.visit('/jobs/2');
    cy.get('h3').contains('Sailthru');
    cy.get('h4').contains('Senior Software Developer (UI)');
    cy.contains('12/2015');
    cy.contains('06/2017');
    cy.get('ul').children().should('have.length', 4);
  });

  it('renders the third job details', () => {
    cy.visit('/jobs/3');
    cy.get('h3').contains('JP Morgan Chase');
    cy.get('h4').contains('Associate Applications Developer (UI)');
    cy.contains('09/2014');
    cy.contains('11/2015');
    cy.get('ul').children().should('have.length', 3);
  });

  it('renders the fourth job details', () => {
    cy.visit('/jobs/4');
    cy.get('h3').contains('MTV Networks (Social Media group)');
    cy.get('h4').contains('Senior Web Developer');
    cy.contains('10/2013');
    cy.contains('08/2014');
    cy.get('ul').children().should('have.length', 4);
  });

  it('renders the fifth job details', () => {
    cy.visit('/jobs/5');
    cy.get('h3').contains('MTV Networks (Digital Music group)');
    cy.get('h4').contains('Web Developer');
    cy.contains('05/2010');
    cy.contains('10/2013');
    cy.get('ul').children().should('have.length', 6);
  });

  it('renders the sixth job details', () => {
    cy.visit('/jobs/6');
    cy.get('h3').contains('Kit Digital (formerly The FeedRoom)');
    cy.get('h4').contains('Web Developer');
    cy.contains('10/2006');
    cy.contains('05/2010');
    cy.get('ul').children().should('have.length', 3);
  });

  it('renders the seventh job details', () => {
    cy.visit('/jobs/7');
    cy.get('h3').contains('ITS Department CUNY, Brooklyn College');
    cy.get('h4').contains('Web Developer');
    cy.contains('05/2005');
    cy.contains('10/2006');
    cy.get('ul').children().should('have.length', 2);
  });

  it('renders the eight job details', () => {
    cy.visit('/jobs/8');
    cy.get('h3').contains('Digital Art Department CUNY, Brooklyn College');
    cy.get('h4').contains('Web Developer');
    cy.contains('09/2004');
    cy.contains('01/2006');
    cy.get('ul').children().should('have.length', 1);
  });

  it('renders the page not found when non-existing job details page is requested', () => {
    cy.request({ url: '/85', failOnStatusCode: false })
      .its('status')
      .should('equal', 404);
    cy.visit('/jobs/85', { failOnStatusCode: false });
    cy.get('h1').contains('404');
    cy.get('h2').contains('This page could not be found.');
  });
});

export {};
