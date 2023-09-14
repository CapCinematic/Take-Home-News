import React from "react";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

async function GetData() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c');
      const data = await response.json();
      setArticles(data.articles);
    }

    fetchNews();
  }, []);

  return (
    <ArticleList articles={articles} />
  );
}

export default GetData