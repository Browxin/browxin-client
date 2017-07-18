import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';
import Container from './Container';
import reducer from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeSwitcher themePath="themes" defaultTheme="lumen">
      <Container />
    </ThemeSwitcher>
  </Provider>,
  document.getElementById('app'),
);
