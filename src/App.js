import './App.css';
import './ArticlePreview.css'
import { Route, Routes } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("general");

  function handleClick(category) {
    setCategory(category);
  }

  return (
    <div className="App">
       <Header handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<ArticleList category={category} />} />
        <Route path="/article/:title" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
