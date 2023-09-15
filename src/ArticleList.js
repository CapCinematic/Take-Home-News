import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";

function ArticleList({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      let url = "";
      if (category === "business") {
        url =
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef1451a6620e4bac88b89f17692b479c";
      } else if (category === "technology") {
        url =
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ef1451a6620e4bac88b89f17692b479c";
      } else {
        url =
          "https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c";
      }
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    }

    fetchNews();
  }, [category]);

  return (
    <div>
      {articles.map((article) => (
        <Link key={article.title} to={`/article/${article.title}`}>
          <ArticlePreview article={article} />
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
