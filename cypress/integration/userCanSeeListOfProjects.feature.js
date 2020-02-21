describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#projects-tab').click();
  })

  it('displays first project', () => {
    cy.get('#project-1').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'ATM Machine');
      cy.get('.description').should('contain', 'first project. I used Ruby');
      cy.get('.link').should('exist');
    })
  });

  it('displays second project', () => {
    cy.get('#project-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Library');
      cy.get('.description').should('contain', 'second project exploring Ruby');
      cy.get('.link').should('exist');
    })
  });

  it('displays third project', () => {
    cy.get('#project-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'AUT Challenge');
      cy.get('.description').should('contain', "first dive into using a framework");
      cy.get('.link').should('exist');
    })
  });  
});