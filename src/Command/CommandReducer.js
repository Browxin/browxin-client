import {
  CHANGE_COMMAND_TEXT,
} from './CommandActions.js';

const initialState = {
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMMAND_TEXT:
      state.text = action.text;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
};

export default reducer;
