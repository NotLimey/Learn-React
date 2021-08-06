import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);