import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeContext, themes } from './components/Layout/ThemeContext/ThemeContext'

ReactDOM.render(
  <ThemeContext.Provider value={themes.purple}>
    <App />
  </ThemeContext.Provider>
  ,
  document.getElementById('root')
);


