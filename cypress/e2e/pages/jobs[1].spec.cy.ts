describe('first job', () => {
  it('render the first job details', () => {
    cy.visit('/jobs/1');
    cy.get('h3').contains('Bank of America, Merrill Lynch');
    cy.get('h4').contains('VP Software Developer (UI)');
    cy.contains('07/2017');
    cy.contains('Present');
    cy.get('ul').children().should('have.length', 9);
  });
});

export {};
