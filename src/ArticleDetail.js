import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ArticalDetail.css'

function ArticleDetail() {
  const { title } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(title)}&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c`);
      const data = await response.json();
      setArticle(data.articles[0]);
    }

    fetchArticle();
  }, [title]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="article-title">{article.title}</h1>
      <img className="article-image" src={article.urlToImage} alt={article.title} />
      <p className="article-content" >{article.content}</p>
    </div>
  );
}

export default ArticleDetail;