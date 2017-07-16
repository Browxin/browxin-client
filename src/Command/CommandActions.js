import { CHANGE_COMMAND_TEXT } from './CommandActionTypes';

const changeText = text => ({
  type: CHANGE_COMMAND_TEXT,
  text,
});

export default {
  changeText,
};

