import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { ThemeContext, themes } from './components/Layout/themeContext/ThemeContext'

const store = createStore(rootReducer,
  applyMiddleware(thunk))
  

ReactDOM.render(
  <ThemeContext.Provider value={themes.green}>
    
  <Provider store={store}><App /></Provider>
  </ThemeContext.Provider>
  ,
  document.getElementById('root')
);


