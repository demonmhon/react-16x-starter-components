import React from 'react';
import { create } from 'react-test-renderer';
import Table from './table';

describe('Table component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Table />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
