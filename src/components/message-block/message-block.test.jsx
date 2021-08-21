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

  test('has the text provided', () => {
    const component = shallow(<MessageBlock>Test message</MessageBlock>);
    expect(component.text()).toBe('Test message');
  });

  describe('type', () => {
    test('set the type with valid type value', () => {
      const typeName = MessageBlock.Type.Error;
      const expectedClassName = 'error';
      const component = shallow(<MessageBlock type={typeName} />);
      expect(component.prop('data-type')).toBe(expectedClassName);
    });

    test('not set an invalid type, default to "info"', () => {
      const typeName = 'invalidType';
      const expectedClassName = 'info';
      const component = shallow(<MessageBlock type={typeName} />);
      expect(component.prop('data-type')).toBe(expectedClassName);
    });
  });
});
