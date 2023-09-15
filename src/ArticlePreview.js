import './ArticlePreview.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function ArticlePreview({ article }) {
  const navigate = useNavigate();
  return (
    <div className="article-preview" onClick={() => navigate(`/article/${article.title}`) }>
      <img className="preview-img" src={article.urlToImage} alt={article.title} />
      <h3 className="preview-h3">{article.title}</h3>
      <p className="preview-description">{article.description}</p>
      <p className="preview-publishedAt">{article.publishedAt}</p>
      <Link to={`/article/${encodeURIComponent(article.title)}`}>Read More</Link>
    </div>
  );
}

export default ArticlePreview;
