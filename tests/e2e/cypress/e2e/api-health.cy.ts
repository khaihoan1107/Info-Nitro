describe('API Health', () => {
  it('backend health endpoint returns ok', () => {
    cy.request(`${Cypress.env('API_URL')}/api/health`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'ok');
    });
  });
});
