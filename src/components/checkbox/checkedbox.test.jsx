import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from './index';

describe('Checkbox component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Checkbox />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
