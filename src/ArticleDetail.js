
function ArticleDetail({ article }) {
  return (
    <div>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>By:{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}