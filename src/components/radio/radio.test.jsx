import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Radio from './index';

describe('Radio component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Radio />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<Radio className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });

  test('has the provided class name', () => {
    const className = 'the-custom-css-class';
    const component = shallow(<Radio className={className} />);
    expect(component.hasClass(className)).toBe(true);
  });

  test('disabled some option', () => {
    const component = shallow(
      <Radio.Group>
        <Radio value="a" label={'Option A'} />
        <Radio value="b" label={'Option B'} />
        <Radio value="c" label={'Option C'} disabled />
        <Radio value="d" label={'Option D'} disabled />
      </Radio.Group>
    );
    expect(component.find('[value="c"]').is('[disabled]')).toBe(true);
    expect(component.find('[value="d"]').is('[disabled]')).toBe(true);
  });

  describe('onChange()', () => {
    test('called', () => {
      const props = {
        onChange: jest.fn(),
      };
      const component = shallow(
        <Radio.Group {...props}>
          <Radio value="a" label={'Option A'} />
          <Radio value="b" label={'Option B'} />
          <Radio value="c" label={'Option C'} />
          <Radio value="d" label={'Option D'} />
        </Radio.Group>
      );
      component.find('[value="c"]').simulate('change', () => {});
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    test('not called if disabled', () => {
      const props = {
        disabled: true,
        onChange: jest.fn(),
      };
      const component = shallow(
        <Radio.Group {...props}>
          <Radio value="a" label={'Option A'} />
          <Radio value="b" label={'Option B'} />
          <Radio value="c" label={'Option C'} disabled />
          <Radio value="d" label={'Option D'} disabled />
        </Radio.Group>
      );
      component.find('[value="c"]').simulate('change', () => {});
      component.find('[value="a"]').simulate('change', () => {});
      component.find('[value="d"]').simulate('change', () => {});
      expect(props.onChange).toHaveBeenCalledTimes(0);
    });
  });
});
