import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Button from './index';

describe('Button component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('has default button text', () => {
    const component = shallow(<Button />);
    expect(component.find('.button__label').text()).toEqual('Button');
  });

  test('use the given childen as button text', () => {
    const buttonText = 'OK';
    const component = shallow(<Button>{buttonText}</Button>);
    expect(component.find('.button__label').text()).toEqual(buttonText);
  });

  test('has the provided class name', () => {
    const className = 'aaa';
    const component = shallow(<Button className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });
});
