export const CHANGE_COMMAND_TEXT = 'CHANGE_COMMAND_TEXT';

const changeText = text => ({
  type: CHANGE_COMMAND_TEXT,
  text,
});

export default {
  changeText,
}

