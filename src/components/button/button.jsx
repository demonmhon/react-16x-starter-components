import React from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import './button.scss';

const BUTTON_TYPES = {
  Primary: 'primary',
  Secondary: 'secondary',
  Button: 'button',
};

const BUTTON_SIZES = {
  ExtraSmall: 'xs',
  Small: 's',
  Medium: 'm',
  Large: 'l',
};

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
   * Button size:
   *
   * * `s`
   * * `m`
   * * `l`
   */
  size: PropTypes.string,
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
  type: BUTTON_TYPES.Button,
  size: BUTTON_SIZES.M,
  disabled: false,
  onClick() {},
};

/**
 * To trigger an operation.
 */
const Button = (props) => {
  const { children, className, type, size, disabled } = props;

  const doOnClick = (e) => {
    if (!props.disabled) {
      props.onClick(e);
    }
  };

  const buttonCssClassList = [`${ns}-button`, `${ns}-button--type-button`];
  const buttonProps = {};

  if (
    Object.values(BUTTON_TYPES)
      .filter((t) => t !== BUTTON_TYPES.Button)
      .includes(type)
  )
    buttonCssClassList.push(`${ns}-button--type-${type}`);
  if (Object.values(BUTTON_SIZES).includes(size))
    buttonCssClassList.push(`${ns}-button--size-${size}`);
  if (className) buttonCssClassList.push(className);
  if (disabled) buttonProps.disabled = true;

  return (
    <button
      {...buttonProps}
      className={buttonCssClassList.join(' ')}
      onClick={doOnClick}
    >
      <span className={`${ns}-button__label`}>{children}</span>
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.Type = { ...BUTTON_TYPES };
Button.Size = { ...BUTTON_SIZES };

export default Button;
