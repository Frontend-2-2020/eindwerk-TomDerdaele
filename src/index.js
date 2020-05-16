import React from 'react';
import ReactDOM from 'react-dom';
import "./stylesGlobal/normalize.css";
import "./stylesGlobal/reset.css";
import "./stylesGlobal/typoBasic.css";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);