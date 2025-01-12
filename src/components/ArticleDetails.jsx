import React from 'react';

const ArticleDetails = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <div className="p-4">
      <button onClick={onBack} className="mb-4 text-blue-500">
        Back to List
      </button>
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetails;
