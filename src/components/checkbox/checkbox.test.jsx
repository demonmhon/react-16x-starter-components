import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Checkbox from './index';

describe('Checkbox component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Checkbox />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<Checkbox className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });

  describe('attributes', () => {
    test('default checked is false', () => {
      const component = shallow(<Checkbox />);
      expect(component.find('input').props().checked).toEqual(false);
    });

    test('checked added to component', () => {
      const props = {
        checked: true,
      };
      const component = shallow(<Checkbox {...props} />);
      expect(component.find('input').props().checked).toEqual(true);
    });

    test('disabled added to component', () => {
      const props = {
        disabled: true,
      };
      const component = shallow(<Checkbox {...props} />);
      expect(component.find('input').props().disabled).toEqual(true);
    });
  });
});
