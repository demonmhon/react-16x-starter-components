import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import Radio from './radio';

/**
 * `<Radio>` wrapper
 */
const RadioGroup = (props) => {
  const { className, disabled, children, value, onChange } = props;

  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const doOnChange = (option) => {
    if (!disabled) {
      onChange(option);
    }
  };

  const radioGroupCssClassList = [`${ns}-radio-group`];
  if (disabled) radioGroupCssClassList.push(`${ns}-radio-group--disabled`);
  if (radioGroupCssClassList) radioGroupCssClassList.push(className);

  return (
    <div className={radioGroupCssClassList.join(' ')}>
      {React.Children.map(children, (child) => {
        if (child.type === Radio) {
          return React.cloneElement(child, {
            ...child.props,
            disabled: disabled ? true : child.props.disabled,
            checked: currentValue === child.props.value,
            onChange: doOnChange,
          });
        }
        return child;
      })}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.node,
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Disables the input if set to true.
   */
  disabled: PropTypes.bool,
  /**
   * Value of checked option
   */
  value: PropTypes.string,
  /**
   * A callback function, executed when the radio option is changed.
   *
   * ```() => {}```
   */
  onChange: PropTypes.func,
};
RadioGroup.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  value: '',
  onChange() {},
};

export default RadioGroup;
