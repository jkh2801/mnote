import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import TIL from './components/TIL'
import Memoirs from './components/Memoirs'
import Profile from './components/Profile'

function App() {
  return (
    <div className="app">
      <Router basename="mnote">
        <Route path="/" component = {Nav} ></Route>
        <Route path="/" exact component = {Home} ></Route>
        <Route path="/til" component = {TIL} ></Route>
        <Route path="/memoirs" component = {Memoirs} ></Route>
        <Route path="/profile" component = {Profile} ></Route>
      </Router>
    </div>
  );
}

export default App;
