import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState=('')

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c`)
      const data = await response.json();
      console.log(data, "data")
      const article = data.articles.find((a) => a.title === id)
      setArticle(article)
    }
    fetchArticle()
  }, [id])

  if (!article) {
    return <div>Article One The Way...</div>;
  }

  return (
    <div>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>By:{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail