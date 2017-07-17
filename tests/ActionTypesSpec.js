import { expect } from 'chai';
import _ from 'lodash';
import CommandActionTypes from '~/Command/CommandActionTypes';

it('ActionTypes are not duplicates', () => {
  const arr = [
    ..._.values(CommandActionTypes),
  ];
  expect(arr).to.be.eql(_.uniq(arr));
});

