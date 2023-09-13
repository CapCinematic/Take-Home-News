import React from "react";

function ArticlePreview({ article }) {
  return (
    <div>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <p>{article.publishedAt}</p>
    </div>
  );
}

export default ArticlePreview