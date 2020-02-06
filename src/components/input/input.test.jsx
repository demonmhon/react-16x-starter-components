import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Input from './index';

describe('Input component', () => {
  describe('Input', () => {
    test('it matches the snapshot', () => {
      const component = create(<Input />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    test('has the provided class name', () => {
      const className = 'the-custom-css-class';
      const component = shallow(<Input className={className} />);
      expect(component.hasClass(className)).toBe(true);
    });

    describe('attributes', () => {
      test('value set correctly', () => {
        const props = {
          value: 'input value 1234',
        };
        const component = mount(<Input {...props} />);
        expect(component.find('input').props().value).toEqual(props.value);
      });

      test('disabled set correctly', () => {
        const props = {
          disabled: true,
        };
        const component = mount(<Input {...props} />);
        expect(component.find('input').props().disabled).toEqual(true);
      });
    });

    describe('onChange()', () => {
      test('called', () => {
        const props = {
          onChange: jest.fn(),
        };
        const component = mount(<Input {...props} />);
        component
          .find('input')
          .simulate('change', { target: { value: 'new-value' } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });

      test('not called if disabled', () => {
        const props = {
          onChange: jest.fn(),
        };
        const component = mount(<Input {...props} />);
        component
          .find('input')
          .simulate('change', { target: { value: 'new-value' } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Input.Textarea', () => {
    describe('onChange()', () => {
      test('called', () => {
        const props = {
          onChange: jest.fn(),
        };
        const component = mount(<Input.Textarea {...props} />);
        component
          .find('textarea')
          .simulate('change', { target: { value: 'new-value' } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });

      test('not called if disabled', () => {
        const props = {
          onChange: jest.fn(),
        };
        const component = mount(<Input.Textarea {...props} />);
        component
          .find('textarea')
          .simulate('change', { target: { value: 'new-value' } });
        expect(props.onChange).toHaveBeenCalledTimes(1);
      });
    });
  })
});
