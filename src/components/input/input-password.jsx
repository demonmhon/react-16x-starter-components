import React from 'react';
import PropTypes from 'prop-types';

import InputCommon from './input-common';
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
  value: '',
  onChange() {},
};

const InputPassword = (props) => {
  return (
    <InputWrapper {...props}>
      <InputCommon type={'password'} {...props} />
    </InputWrapper>
  );
};

InputPassword.propTypes = propTypes;
InputPassword.defaultProps = defaultProps;

export default InputPassword;
