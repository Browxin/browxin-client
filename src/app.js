import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import Index from './Index.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers.js';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}><Index /></Provider>,
  document.getElementById('app')
);
