import React from 'react';
import { Grid } from 'react-bootstrap';
import Command from './Command/Command';

class Container extends React.Component {
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

export default Container;
