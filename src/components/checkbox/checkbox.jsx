import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import './checkbox.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.node,
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Specifies whether the checkbox is checked.
   */
  checked: PropTypes.bool,
  /**
   * Disables the checkbox if set to true. Disabled checkbox won't trigger the `onChange`.
   */
  disabled: PropTypes.bool,
  /**
   * A callback function, executed when the checkbox is changed.
   *
   * ```() => {}```
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: '',
  className: '',
  disabled: false,
  checked: false,
  onChange() {},
};

/**
 * Allows user to select a value from multiple options
 *
 * Controlled component. Value will be set by prop.
 */
const Checkbox = (props) => {
  const { children, className, checked, disabled, onChange } = props;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const doOnChange = () => {
    if (!disabled) {
      onChange();
    }
  };

  const checkboxCssClassList = [`${ns}-checkbox`];
  const checkboxProps = {};

  if (className) checkboxCssClassList.push(className);
  if (disabled) {
    checkboxCssClassList.push(`${ns}-checkbox--disabled`);
    checkboxProps.disabled = true;
  }

  return (
    <div className={checkboxCssClassList.join(' ')}>
      <label className={`${ns}-checkbox__container`}>
        <input
          type="checkbox"
          checked={isChecked}
          {...checkboxProps}
          onChange={doOnChange}
        />
        <span className={`${ns}-checkbox__ui`} />
        <div className={`${ns}-checkbox__label`}>{children}</div>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
