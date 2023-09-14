import React from "react";
import { useParams } from "react-router-dom";

function ArticleDetail({ article }) {
  const { id } = useParams();
  
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