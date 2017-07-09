import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { Grid } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Command from './Command/Command';
import reducer from './reducers.js';

class Index extends React.Component {
  render(){
    return (
      <Grid>
        <h1>Browxin</h1>
        <p className="lead hidden-xs">Open Source, Multiple Search, Commands, Custom Widgets</p>
        <Command />
      </Grid>
    );
  }
}

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}><Index /></Provider>,
  document.getElementById('app')
);
