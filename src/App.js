import './App.css';
import { Route, Routes } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:title" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
