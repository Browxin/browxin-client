import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';
import reducer from './reducers.js';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeSwitcher themePath="/themes" defaultTheme="lumen">
      <Container />
    </ThemeSwitcher>
  </Provider>,
  document.getElementById('app')
);
