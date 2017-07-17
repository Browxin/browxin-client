import { CHANGE_COMMAND_TEXT } from './CommandActionTypes';

export const changeText = text => ({
  type: CHANGE_COMMAND_TEXT,
  text,
});

