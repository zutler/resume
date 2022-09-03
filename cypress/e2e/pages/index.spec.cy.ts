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

  it('shows the My Skills section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Skills').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Skills');
    cy.contains('Languages:').should('be.visible');
    cy.contains(
      'JavaScript(ES5, ES6); TypeScript; HTML(5); CSS(3); Sass'
    ).should('be.visible');
    cy.contains('Frameworks:').should('be.visible');
    cy.contains('React; NextJs; Angular; ExtJS; jQuery').should('be.visible');
    cy.contains('Editors:').should('be.visible');
    cy.contains('VS Code; Sublime; Atom; WebStorm').should('be.visible');
    cy.contains('Bundlers:').should('be.visible');
    cy.contains('Webpack; Vite; Gulp; Grunt').should('be.visible');
    cy.contains('CMS:').should('be.visible');
    cy.contains('GitHub; Bitbucket; SVN; CVS; TFS').should('be.visible');
    cy.contains('Grids:').should('be.visible');
    cy.contains('AG-Grid; UI-Grid; Kendo-Grid').should('be.visible');
    cy.contains('UI Frameworks:').should('be.visible');
    cy.contains('Material-UI; Bootstrap; Chakra-UI; Kendo-UI').should(
      'be.visible'
    );
    cy.contains('Databases:').should('be.visible');
    cy.contains('MySQL; MongoDB').should('be.visible');
  });

  it('hides the My Skills section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Skills').click();
    cy.contains('- My Skills').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('+ My Skills');
    cy.contains('Languages:').should('not.be.visible');
    cy.contains(
      'JavaScript(ES5, ES6); TypeScript; HTML(5); CSS(3); Sass'
    ).should('not.be.visible');
    cy.contains('Frameworks:').should('not.be.visible');
    cy.contains('React; NextJs; Angular; ExtJS; jQuery').should(
      'not.be.visible'
    );
    cy.contains('Editors:').should('not.be.visible');
    cy.contains('VS Code; Sublime; Atom; WebStorm').should('not.be.visible');
    cy.contains('Bundlers:').should('not.be.visible');
    cy.contains('Webpack; Vite; Gulp; Grunt').should('not.be.visible');
    cy.contains('CMS:').should('not.be.visible');
    cy.contains('GitHub; Bitbucket; SVN; CVS; TFS').should('not.be.visible');
    cy.contains('Grids:').should('not.be.visible');
    cy.contains('AG-Grid; UI-Grid; Kendo-Grid').should('not.be.visible');
    cy.contains('UI Frameworks:').should('not.be.visible');
    cy.contains('Material-UI; Bootstrap; Chakra-UI; Kendo-UI').should(
      'not.be.visible'
    );
    cy.contains('Databases:').should('not.be.visible');
    cy.contains('MySQL; MongoDB').should('not.be.visible');
  });

  it('renders My Experience button', () => {
    cy.visit('/');

    cy.contains('+ My Experience');
  });

  it('renders My Education button', () => {
    cy.visit('/');

    cy.contains('+ My Education');
  });
  //TODO: implement education secion with expansion and navigation to a child page

  it('shows the My Education section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.contains('- My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.contains('CUNY, Brooklyn College').should('be.visible');
      cy.contains('Brooklyn, NY').should('be.visible');
      cy.contains('01/2002').should('be.visible');
      cy.contains('02/2006').should('be.visible');
      cy.contains('Rostov State University of Transport Communications').should(
        'be.visible'
      );
      cy.contains('Rostov-on-Don, RUS').should('be.visible');
      cy.contains('09/1995').should('be.visible');
      cy.contains('06/2000').should('be.visible');
    });
  });

  it('hides the My Education section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    cy.contains('- My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.contains('+ My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.contains('CUNY, Brooklyn College').should('not.be.visible');
      cy.contains('Brooklyn, NY').should('not.be.visible');
      cy.contains('01/2002').should('not.be.visible');
      cy.contains('02/2006').should('not.be.visible');
      cy.contains('Rostov State University of Transport Communications').should(
        'not.be.visible'
      );
      cy.contains('Rostov-on-Don, RUS').should('not.be.visible');
      cy.contains('09/1995').should('not.be.visible');
      cy.contains('06/2000').should('not.be.visible');
    });
  });

  //TODO: implement expanding of the accordion
});
