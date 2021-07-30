import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import RadioGroup from './radio-group';
import './radio.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.node,
  /**
   * Label test for this option.
   */
  label: PropTypes.string,
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Option value
   */
  value: PropTypes.string,
  /**
   * Specifies whether the option is checked.
   */
  checked: PropTypes.bool,
  /**
   * Disables the option if set to true. Disabled option won't trigger the `onChange`.
   */
  disabled: PropTypes.bool,
  /**
   * A callback function, executed when the option is changed.
   *
   * ```(value) => {}```
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: '',
  label: '',
  className: '',
  value: '',
  disabled: false,
  checked: false,
  onChange() {},
};

/**
 * Allows user to select a value from multiple options
 *
 * Controlled component. Value will be set by prop.
 */
const Radio = (props) => {
  const {
    children,
    label,
    className,
    value,
    checked,
    disabled,
    onChange,
  } = props;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const doOnChange = (e) => {
    const value = e.target.value;
    const label = e.target.getAttribute('data-label');
    if (!disabled) {
      onChange({ value, label });
    }
  };

  const radioCssClassList = [`${ns}-radio`];
  const radioProps = {};

  if (className) radioCssClassList.push(className);
  if (disabled) {
    radioCssClassList.push(`${ns}-radio--disabled`);
    radioProps.disabled = true;
  }

  return (
    <div className={radioCssClassList.join(' ')}>
      <label className={`${ns}-radio__container`}>
        <input
          type="radio"
          checked={isChecked}
          {...radioProps}
          value={value}
          data-label={label}
          onChange={doOnChange}
        />
        <span className={`${ns}-radio__ui`} />
        <div className={`${ns}-radio__label`}>{children || label}</div>
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = RadioGroup;

export default Radio;
