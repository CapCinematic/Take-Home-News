import React from "react";
import './ArticlePreview.css'

function ArticlePreview({ article }) {
  return (
    <div className="article-preview">
      <img className="preview-img" src={article.urlToImage} alt={article.title} />
      <h3 className="preview-h3">{article.title}</h3>
      <p className="preview-description">{article.description}</p>
      <p className="preview-publishedAt">{article.publishedAt}</p>
    </div>
  );
}

export default ArticlePreview