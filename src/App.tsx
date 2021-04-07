import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container" id="app">
      <SearchBar />
      <Route path='/' exact component = { Home } />
      
    </div>
  );
}

export default App;
