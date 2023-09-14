import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c');
      const data = await response.json();
      setArticles(data.articles);
    }

    fetchNews();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <Link key={article.title} to={`/article/${article.title}`}>
          <ArticlePreview article={article} />
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
