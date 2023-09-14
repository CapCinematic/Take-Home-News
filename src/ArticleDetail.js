import React from "react";

function ArticleDetail({ article }) {
  return (
    <div>
      {/* <img src={article.url} alt={article.title} /> */}
      <h3>{article.title}</h3>
      <p>By:{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail