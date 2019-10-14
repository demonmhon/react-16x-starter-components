import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import css from './checkbox.scss';

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
 * Checkbox
 *
 * Controlled component. Value will be set by prop.
 */
function Checkbox(props) {
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

  const checkboxCssClassList = [css.checkbox];
  const checkboxProps = {};

  if (className) checkboxCssClassList.push(className);
  if (disabled) {
    checkboxCssClassList.push(css['checkbox--disabled']);
    checkboxProps.disabled = true;
  }

  return (
    <div className={checkboxCssClassList.join(' ')}>
      <label className={css.checkbox__container}>
        <input
          type="checkbox"
          checked={isChecked}
          {...checkboxProps}
          onChange={doOnChange}
        />
        <span className={css.checkbox__ui} />
        <div className={css.checkbox__label}>{children}</div>
      </label>
    </div>
  );
}

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = defaultProps;

export default Checkbox;
