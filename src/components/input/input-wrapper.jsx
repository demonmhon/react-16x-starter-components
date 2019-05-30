import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './input.scss';

const InputWrapper = props => {
  const { className, children, label: labelText } = props;

  const inputCssClassList = [`${ALIAS}-input`];
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

InputWrapper.propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Label of input
   */
  label: PropTypes.string,
};

InputWrapper.defaultProps = {
  className: '',
  label: '',
};

export default InputWrapper;
