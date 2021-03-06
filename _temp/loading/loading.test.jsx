import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Loading from './index';

describe('Loadingp component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Loading />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<Loading className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });
});
