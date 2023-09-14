import './App.css';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import { Route, Routes } from 'react-router-dom';
import GetData from './GetData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={ArticleList} />
        <Route path="/article/:title" component={ArticleDetail} />
      </Routes>
    </div>
  );
}

export default App;
