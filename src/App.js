import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router basename="mnote">
        <Nav/>
        <Route path="/" exact component = {Home} ></Route>
      </Router>
    </div>
  );
}

export default App;
