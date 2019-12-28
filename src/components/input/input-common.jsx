import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.string.isRequired,
  /**
   * One or more class names to be added to the root element (input wrapper) of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Disables the input if set to true.
   */
  disabled: PropTypes.bool,
  /**
   * Readonly the input if set to true.
   */
  readOnly: PropTypes.bool,
  /**
   * Label of input
   */
  label: PropTypes.string,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Initial value
   */
  value: PropTypes.string,
  /**
   * A callback function, executed when the input is changed.
   *
   * ```(value) => {}```
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  type: 'text',
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  value: '',
  onChange() {},
};

/**
 * Provide the user input is a text field.
 */
function Input(props) {
  const {
    type: inputType,
    disabled,
    readOnly,
    placeholder,
    value,
    onChange,
  } = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const doOnChange = e => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  const onKeyDown = e => {
    /**
     * keyCode
     * 13 = Enter -- Trigger the onChange immediately.
     */
    if (e.keyCode === 13) {
      onChange(inputValue);
    }
  };

  const type = ['text', 'number', 'email', 'password', 'search'].includes(
    inputType
  )
    ? inputType
    : 'text';

  const inputProps = {
    type: type,
    onKeyDown: onKeyDown,
    onChange: doOnChange,
    value: value,
  };
  if (placeholder) inputProps.placeholder = placeholder;
  if (readOnly) inputProps.readOnly = true;
  if (disabled) inputProps.disabled = true;

  return <input {...inputProps} />;
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
