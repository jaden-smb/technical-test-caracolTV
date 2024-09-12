describe('Handlebars LESS Project', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should render the header with hot topics and social links', () => {
      cy.get('.header__navigation-list--left').within(() => {
        cy.get('.header__navigation-item').should('have.length.greaterThan', 1);
      });
  
      cy.get('.header__social--right').within(() => {
        cy.get('.header__social-link').should('have.length.greaterThan', 1);
      });
    });
  
    it('should render the breadcrumbs', () => {
      cy.get('.breadcrumbs').within(() => {
        cy.get('.breadcrumbs__link').should('have.length.greaterThan', 1);
      });
    });
  
    it('should render the main content with lead images and article', () => {
      cy.get('.lead').within(() => {
        cy.get('.lead__image').should('have.length.greaterThan', 0);
      });
  
      cy.get('.article').within(() => {
        cy.get('.article__headline').should('exist');
        cy.get('.article__subheadline').should('exist');
      });
    });
  
    it('should toggle the hamburger menu visibility', () => {
      cy.get('#hamburger-button').click();
      cy.get('#hamburger-nav').should('have.class', 'hamburger-menu__nav--visible');
    });
  });