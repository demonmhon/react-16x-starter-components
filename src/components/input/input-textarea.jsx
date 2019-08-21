import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import './input.scss';

const propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
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
   * Visible number of lines in a text area
   */
  rows: PropTypes.number,
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
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  rows: 3,
  value: '',
  onChange() {},
};

function InputTextarea(props) {
  const { disabled, readOnly, placeholder, value, onChange, rows } = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const doOnChange = value => {
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

  return (
    <InputWrapper {...props}>
      <textarea
        placeholder={placeholder}
        rows={rows}
        onKeyDown={onKeyDown}
        onChange={e => doOnChange(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
      />
    </InputWrapper>
  );
}

InputTextarea.propTypes = propTypes;
InputTextarea.defaultProps = defaultProps;

export default InputTextarea;
