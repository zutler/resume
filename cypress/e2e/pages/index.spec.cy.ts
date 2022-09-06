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
    cy.get('[data-cy="user-accordion"]').within(() => {
      cy.contains('448 Neptune Ave').should('be.visible');
      cy.contains('Apt. 16G').should('be.visible');
      cy.contains('Brooklyn,').should('be.visible');
      cy.contains('NY').should('be.visible');
      cy.contains('11224').should('be.visible');
      cy.contains('1-(646)-331-4725').should('be.visible');
      cy.contains('dmitriy.zutler@gmail.com').should('be.visible');
      cy.contains('http://www.linkedin.com/in/zutler').should('be.visible');
    });
  });

  it('hides the My Contacts section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Contacts').click();
    cy.contains('- My Contacts').click();
    cy.contains('+ My Contacts');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.get('[data-cy="user-accordion"]').within(() => {
      cy.contains('448 Neptune Ave').should('not.be.visible');
      cy.contains('Apt. 16G').should('not.be.visible');
      cy.contains('Brooklyn,').should('not.be.visible');
      cy.contains('NY').should('not.be.visible');
      cy.contains('11224').should('not.be.visible');
      cy.contains('1-(646)-331-4725').should('not.be.visible');
      cy.contains('dmitriy.zutler@gmail.com').should('not.be.visible');
      cy.contains('http://www.linkedin.com/in/zutler').should('not.be.visible');
    });
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
    cy.get('[data-cy="skills-accordion"]').within(() => {
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
  });

  it('hides the My Skills section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Skills').click();
    cy.contains('- My Skills').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('+ My Skills');
    cy.get('[data-cy="skills-accordion"]').within(() => {
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
  });

  it('renders My Experience button', () => {
    cy.visit('/');

    cy.contains('+ My Experience');
  });

  it('shows the My Experience section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Experience').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Experience');

    cy.get('[data-cy="jobs-accordion"]').within(() => {
      cy.contains('Bank of America, Merrill Lynch').should('be.visible');
      cy.contains('VP Software Developer (UI)').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('07/2017').should('be.visible');
      cy.contains('Present').should('be.visible');

      cy.contains('Sailthru').should('be.visible');
      cy.contains('Senior Software Developer (UI)').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('12/2015').should('be.visible');
      cy.contains('06/2017').should('be.visible');

      cy.contains('JP Morgan Chase').should('be.visible');
      cy.contains('Associate Applications Developer (UI)').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('09/2014').should('be.visible');
      cy.contains('11/2015').should('be.visible');

      cy.contains('MTV Networks (Social Media group)').should('be.visible');
      cy.contains('Senior Web Developer').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('10/2013').should('be.visible');
      cy.contains('08/2014').should('be.visible');

      cy.contains('MTV Networks (Digital Music group)').should('be.visible');
      cy.contains('Web Developer').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('05/2010').should('be.visible');
      cy.contains('10/2013').should('be.visible');

      cy.contains('Kit Digital (formerly The FeedRoom)').should('be.visible');
      cy.contains('Web Developer').should('be.visible');
      cy.contains('NYC, NY').should('be.visible');
      cy.contains('10/2006').should('be.visible');
      cy.contains('05/2010').should('be.visible');
    });
  });

  it('expands Experience Accordion Panel One', () => {
    cy.visit('/');

    cy.contains('+ My Experience').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Experience');

    cy.get('[data-cy="jobs-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-1"]').within(() => {
        cy.contains('Job Details').should('not.be.visible');

        cy.contains('Bank of America, Merrill Lynch').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Job Details').should('be.visible');
      });
    });
  });

  it('navigates to the Experience Details page on click', () => {
    cy.visit('/');

    cy.contains('+ My Experience').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Experience');

    cy.get('[data-cy="jobs-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-1"]').within(() => {
        cy.contains('Job Details').should('not.be.visible');

        cy.contains('Bank of America, Merrill Lynch').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Job Details').should('be.visible').click();

        cy.url().should('include', '/jobs/1');
      });
    });
  });

  it('renders My Education button', () => {
    cy.visit('/');

    cy.contains('+ My Education');
  });

  it('shows the My Education section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
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

  it('expands Education Accordion Panel One', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-1"]').within(() => {
        cy.contains('Degree:').should('not.be.visible');

        cy.contains('CUNY, Brooklyn College').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Degree:').should('be.visible');
        cy.contains('BS').should('be.visible');
        cy.contains('GPA:').should('be.visible');
        cy.contains('3.55').should('be.visible');
        cy.contains('Major:').should('be.visible');
        cy.contains('Computer Science and Information Technologies').should(
          'be.visible'
        );
        cy.contains('Minor:').should('be.visible');
        cy.contains('Multimedia Computing').should('be.visible');
      });
    });
  });

  it('collapses Education Accordion Panel One', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-1"]').within(() => {
        cy.contains('Degree:').should('not.be.visible');

        cy.contains('CUNY, Brooklyn College').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Degree:').should('be.visible');

        cy.contains('CUNY, Brooklyn College').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);

        cy.contains('Degree:').should('not.be.visible');
        cy.contains('BS').should('not.be.visible');
        cy.contains('GPA:').should('not.be.visible');
        cy.contains('3.55').should('not.be.visible');
        cy.contains('Major:').should('not.be.visible');
        cy.contains('Computer Science and Information Technologies').should(
          'not.be.visible'
        );
        cy.contains('Minor:').should('not.be.visible');
        cy.contains('Multimedia Computing').should('not.be.visible');
      });
    });
  });

  it('expands Education Accordion Panel Two', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-2"]').within(() => {
        cy.contains('Degree:').should('not.be.visible');

        cy.contains(
          'Rostov State University of Transport Communications'
        ).click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Degree:').should('be.visible');
        cy.contains('BE').should('be.visible');
        cy.contains('GPA:').should('be.visible');
        cy.contains('3.75').should('be.visible');
        cy.contains('Major:').should('be.visible');
        cy.contains('Mechanical Engineering').should('be.visible');
      });
    });
  });

  it('collapses Education Accordion Panel Two', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.contains('- My Education');

    cy.get('[data-cy="education-accordion"]').within(() => {
      cy.get('[data-cy="accordion-item-2"]').within(() => {
        cy.contains('Degree:').should('not.be.visible');

        cy.contains(
          'Rostov State University of Transport Communications'
        ).click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains('Degree:').should('be.visible');

        cy.contains(
          'Rostov State University of Transport Communications'
        ).click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);

        cy.contains('Degree:').should('not.be.visible');
        cy.contains('BE').should('not.be.visible');
        cy.contains('GPA:').should('not.be.visible');
        cy.contains('3.75').should('not.be.visible');
        cy.contains('Major:').should('not.be.visible');
        cy.contains('Mechanical Engineering').should('not.be.visible');
      });
    });
  });

  it('hides the My Education section on Click', () => {
    cy.visit('/');

    cy.contains('+ My Education').click();
    cy.contains('- My Education').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
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
});

export {}; //address the isolatedModules lint false positive
