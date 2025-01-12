describe('App Component', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('/');
  });

  it('renders the app with a header', () => {
    // Assert that the header is rendered
    cy.contains('NY Times Most Popular Articles').should('be.visible');
  });

  it('changes period and fetches new articles', () => {
    // Select the dropdown for "Select Period:"
    cy.get('select').should('have.value', '7'); // Default value
    cy.get('select').select('1').should('have.value', '1'); // Change to "Last 1 Day"
    
    // Optionally, check if new articles are fetched (mock API or verify UI changes)
    cy.intercept('GET', '**/api/path-for-period=1', { fixture: 'articles-1day.json' }).as('fetchArticles');
    cy.get('select').select('1'); // Trigger the change
    cy.wait('@fetchArticles');
    cy.get('.article-title').should('exist'); // Adjust selector to match article titles
  });
});
