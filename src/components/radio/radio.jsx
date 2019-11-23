import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import RadioGroup from './radio-group';
import css from './radio.scss';

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
 * Radio
 *
 * Controlled component. Value will be set by prop.
 */
function Radio(props) {
  const { children, label, className, value, checked, disabled, onChange } = props;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const doOnChange = value => {
    if (!disabled) {
      onChange(value);
    }
  };

  const radioCssClassList = [css.radio];
  const radioProps = {};

  if (className) radioCssClassList.push(className);
  if (disabled) {
    radioCssClassList.push(css['radio--disabled']);
    radioProps.disabled = true;
  }

  return (
    <div className={radioCssClassList.join(' ')}>
      <label className={css.radio__container}>
        <input
          type="radio"
          checked={isChecked}
          {...radioProps}
          value={value}
          onChange={() => {
            doOnChange({value, label});
          }}
        />
        <span className={css.radio__ui} />
        <div className={css.radio__label}>{children || label}</div>
      </label>
    </div>
  );
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = RadioGroup;

export default Radio;
