import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home'
import SearchBar from './components/SearchBar';
import Search from './components/Search';

function App() {
  return (
    <div className="container" id="app">
      <SearchBar />
      <Route path='/' exact component = { Home } />
      <Route path='/search/:id' exact component = { Search } />

    </div>
  );
}

export default App;
