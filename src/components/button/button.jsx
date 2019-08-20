import React from 'react';
import PropTypes from 'prop-types';

import css from './button.scss';

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
   * Button type:
   *
   * * `primary`
   * * `secondary`
   * * `button`
   */
  type: PropTypes.string,
  /**
   * Disables the button if set to true. Disabled button won't trigger the `onClick`.
   */
  disabled: PropTypes.bool,
  /**
   * A callback function that is triggered when button clicked.
   *
   * `e => {}`
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  children: 'Button',
  className: '',
  type: 'button',
  disabled: false,
  onClick() {},
};

/**
 * To trigger an operation.
 */
function Button(props) {
  const { children, className, type, disabled } = props;

  const doOnClick = e => {
    if (!props.disabled) {
      props.onClick(e);
    }
  };

  const buttonCssClassList = [css.button];
  const buttonProps = {};

  if (['primary', 'secondary', 'button'].includes(type))
    buttonCssClassList.push(css[`button--type-${type}`]);
  if (className) buttonCssClassList.push(className);
  if (disabled) buttonProps.disabled = true;

  return (
    <button
      {...buttonProps}
      className={buttonCssClassList.join(' ')}
      onClick={e => doOnClick(e)}
    >
      <span className={css.button__label}>{children}</span>
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
