import React from 'react';

const ArticleList = ({ articles, onSelectArticle }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li
          key={article.id}
          onClick={() => onSelectArticle(article)}
          className="cursor-pointer border-b py-2 hover:bg-gray-100"
        >
          {article.title}
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
