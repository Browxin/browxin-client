import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import {
  Grid,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  Glyphicon,
} from 'react-bootstrap';

class Index extends React.Component {
  render(){
    return (
      <Grid>
        <h1>Browxin</h1>
        <p className="lead hidden-xs">Open Source, Multiple Search, Commands, Custom Widgets</p>
        <form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
              <FormControl placeholder="検索" type="search" />
              <InputGroup.Button>
                <Button>Go</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </Grid>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
