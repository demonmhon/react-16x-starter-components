import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Radio from './index';

describe('Radio.Group component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Radio.Group />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<Radio.Group className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });
});
