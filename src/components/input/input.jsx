import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import InputText from './input-text';
import InputPassword from './input-password';
import InputTextarea from './input-textarea';

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
 *
 * Controlled component. Value will be set by prop.
 */
function Input(props) {
  return (
    <InputWrapper {...props}>
      <InputText {...props} />
    </InputWrapper>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

Input.Password = InputPassword;
Input.Textarea = InputTextarea;

export default Input;
