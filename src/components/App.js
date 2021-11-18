import logo from '../logo.svg';
import '../css/App.css';
import Login from './Authentication/Login';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Pyodide from './PyodideJenna';

function App() {
  return (
    <Router>
      {/* <Switch>
        <Route path="/login">
        </Route>
        <Route exact path="/">
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
