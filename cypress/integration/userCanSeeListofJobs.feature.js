describe('User can see list of cv items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#cv-tab').click();
  })

  it('displays first item', () => {
    cy.get('#item-1').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Craft Academy');
      cy.get('.description').should('contain', '');
      cy.get('.link').should('exist');
    })
  });

  it('displays second item', () => {
    cy.get('#item-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Intelex');
      cy.get('.description').should('contain', '');
      cy.get('.link').should('exist');
    })
  });

  it('displays third item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Ecocion');
      cy.get('.description').should('contain', "");
      cy.get('.link').should('exist');
    })
  });
  
  it('displays fourth item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Dinosaur Ridge');
      cy.get('.description').should('contain', "");
      cy.get('.link').should('exist');
    })
  });

  it('displays fifth item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Colorado School of Mines');
      cy.get('.description').should('contain', "");
      cy.get('.link').should('exist');
    })
  });
});