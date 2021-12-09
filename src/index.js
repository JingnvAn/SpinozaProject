import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Insert Component imports here
// import App from './components/App';
// import PyIDE from './components/pyodide'
// import Pyodide from './components/PyodideAll';

// Note: imports changed based on Jenna's tests :)
import Container from './components/Container';
import Pyodide from './components/PyodideJenna';

// Insert CSS imports here
import './index.css';
import Login from './components/Login';
import EmailLinkLogin from './components/EmailLinkLogin';
import { AuthProvider } from './context/AuthContext';
import Combination from './components/Combination';
import PrivateRoute from './components/PrivateRoute';

const pythonString = 'print()';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src={'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js'} />
      <script src="testpy_jenna.js"></script>
    </Helmet>
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path = '/'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/ide' component={Combination}>
        </PrivateRoute>
      </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
