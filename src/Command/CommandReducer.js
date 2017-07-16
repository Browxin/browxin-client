import { CHANGE_COMMAND_TEXT } from './CommandActionTypes';

const initialState = {
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMMAND_TEXT:
      return Object.assign({}, state, action);
    default:
      return Object.assign({}, state);
  }
};

export default reducer;
