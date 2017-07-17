import React from 'react';
import { connect } from 'react-redux';
import {
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  Glyphicon,
} from 'react-bootstrap';
import * as actions from './CommandActions';

class Command extends React.Component {
  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
            <FormControl
              placeholder="Search..."
              type="search"
              onChange={e => this.props.handleChangeInput(e)}
              value={this.props.commandText}
            />
            <InputGroup.Button>
              <Button>Go</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

Command.propTypes = {
};

const mapStateToProps = state => ({
  commandText: state.command.text,
});

const mapDispatchToProps = dispatch => ({
  handleChangeInput: e => {
    dispatch(actions.changeText(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Command);
