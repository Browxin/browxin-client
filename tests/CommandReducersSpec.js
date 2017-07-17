import { expect } from 'chai';
import reducer, { initialState } from '~/Command/CommandReducer';
import * as actions from '~/Command/CommandActions';

describe('Command', () => {
  it('can change text', () => {
    const action = actions.changeText('Change Text');
    const state = reducer(initialState, action);
    expect(state.text).to.be.equal('Change Text');
  });
});

