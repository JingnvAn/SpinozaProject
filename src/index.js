import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";

// Insert Component imports here
//import App from './components/App';
import Container from './components/Container';
//import PyIDE from './components/pyodide'
// import Pyodide from './components/PyodideAll';
import Pyodide from './components/PyodideJenna';

// Insert CSS imports here
import './index.css';

const pythonString = 'print()';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src={'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js'} />
      <script src="testpy2.js"></script>
    </Helmet>
    <Container />
    <Pyodide pythonCode={pythonString} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
