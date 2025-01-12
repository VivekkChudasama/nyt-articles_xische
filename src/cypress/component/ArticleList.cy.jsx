import React from 'react';
import { mount } from '@cypress/react';
import ArticleList from '../../components/ArticleList';

describe('ArticleList Component', () => {
  const mockArticles = [
    { id: 1, title: 'Article 1', abstract: 'Abstract 1' },
    { id: 2, title: 'Article 2', abstract: 'Abstract 2' },
  ];

  const mockOnSelectArticle = cy.spy().as('onSelectArticleSpy'); // Cypress spy

  it('renders a list of articles', () => {
    mount(<ArticleList articles={mockArticles} onSelectArticle={mockOnSelectArticle} />);

    // Assert articles are rendered
    cy.contains('Article 1').should('be.visible');
    cy.contains('Abstract 1').should('be.visible');
    cy.contains('Article 2').should('be.visible');
    cy.contains('Abstract 2').should('be.visible');
  });

  it('calls onSelectArticle when an article is clicked', () => {
    mount(<ArticleList articles={mockArticles} onSelectArticle={mockOnSelectArticle} />);

    // Simulate a click on the first article
    cy.contains('Article 1').click();

    // Assert the callback was called with the correct data
    cy.get('@onSelectArticleSpy').should('have.been.calledOnceWith', mockArticles[0]);
  });
});
