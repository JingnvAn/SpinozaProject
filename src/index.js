import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Insert Component imports here
//import App from './components/App';
import Container from './components/Container';
import PyIDE from './components/pyodide'

// Insert CSS imports here
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Container />
    <PyIDE
      id="1"
      pythonCode="print(2*3)"
      loadingMessage = 'loading...'
      evaluatingMessage = 'evaluating...'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
