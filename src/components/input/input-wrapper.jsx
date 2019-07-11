import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './input.scss';

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
   * Label of input
   */
  label: PropTypes.string,
  /**
   * Disables the input if set to true.
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  label: '',
  disable: false,
};

const InputWrapper = props => {
  const { className, disabled, children, label: labelText } = props;

  const inputCssClassList = [`${ALIAS}-input`];
  if (disabled) inputCssClassList.push(`${ALIAS}-input--disabled`);
  if (inputCssClassList) inputCssClassList.push(className);

  const getLabelEl = labelText => {
    return <span className={`${ALIAS}-input__label`}>{labelText}</span>;
  };

  return (
    <div className={inputCssClassList.join(' ')}>
      <label>
        {labelText ? getLabelEl(labelText) : null}
        {children}
      </label>
    </div>
  );
};

InputWrapper.propTypes = propTypes;
InputWrapper.defaultProps = defaultProps;

export default InputWrapper;
