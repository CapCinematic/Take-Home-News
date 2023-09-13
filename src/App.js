import logo from './logo.svg';
import './App.css';
import ArticleList from './ArticleList';

function App() {

// async function getData(){
//   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c');
//   const data = await response.json();
//   console.log(data)
//   return data;
// }
// getData()

  return (
    <div className="App">
     <ArticleList/>
    </div>
  );
}

export default App;
