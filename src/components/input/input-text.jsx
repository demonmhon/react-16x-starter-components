import React from 'react';
import PropTypes from 'prop-types';

import InputCommon from './input-common';

/**
 * Provide the user input is a text field.
 */
const InputText = (props) => {
  return <InputCommon type={'text'} {...props} />;
};

InputText.displayName = 'InputText';
InputText.propTypes = {
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
InputText.defaultProps = {
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  value: '',
  onChange() {},
};

export default InputText;
