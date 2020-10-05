import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import MessageBlock from './index';

describe('MessageBlock component', () => {
  test('it matches the snapshot', () => {
    const component = create(<MessageBlock />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('use the given childen as MessageBlock text', () => {
    const MessageBlockText = 'OK';
    const component = shallow(<MessageBlock>{MessageBlockText}</MessageBlock>);
    expect(component.text()).toEqual(MessageBlockText);
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<MessageBlock className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });

  describe('type', () => {
    test('set the type with valid type value', () => {
      const typeName = MessageBlock.Type.Error;
      const expectedClassName = 'message-block--type-error';
      const component = shallow(<MessageBlock type={typeName} />);
      expect(component.hasClass(expectedClassName)).toBe(true);
    });

    test('not set an invalid type', () => {
      const typeName = 'invalidType';
      const expectedClassName = 'message-block';
      const component = shallow(<MessageBlock type={typeName} />);
      expect(component.hasClass(expectedClassName)).toBe(true);
    });
  });
});
