describe('User can see list of cv items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#cv-tab').click();
  })

  it('displays first item', () => {
    cy.get('#item-1').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Craft Academy');
      cy.get('.description').should('contain', 'Attended full stack development bootcamp.');
      cy.get('.link').should('exist');
    })
  });

  it('displays second item', () => {
    cy.get('#item-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Intelex');
      cy.get('.description').should('contain', 'Worked with SQL to import, organize and manipulate client data into a relational database.');
      cy.get('.link').should('exist');
    })
  });

  it('displays third item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Ecocion');
      cy.get('.description').should('contain', "Ecocion was acquired by Intelex, held the same job here as at Intelex.");
      cy.get('.link').should('exist');
    })
  });
  
  it('displays fourth item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Dinosaur Ridge');
      cy.get('.description').should('contain', "Worked as an educational tour guide and helped where needed to maintain the geologic gems of the ridge.");
      cy.get('.link').should('exist');
    })
  });

  it('displays fifth item', () => {
    cy.get('#item-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Colorado School of Mines');
      cy.get('.description').should('contain', "Graduated with a BS in Geological Engineering and a Minor in Public Affairs");
      cy.get('.link').should('exist');
    })
  });
});