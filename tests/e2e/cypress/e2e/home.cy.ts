describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads successfully', () => {
    cy.get('h1').should('contain', 'Info-Nitro');
  });
});
