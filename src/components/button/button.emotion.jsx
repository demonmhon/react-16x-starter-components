import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

import theme from '../theme';
const ns = '';

/* eslint-disable react/prop-types */
const ButtonStyles = (props) => {
  const { color, space } = theme;
  const stylesType = {
    button: {
      color: color.text1,
      bgColor: theme.button.background,
      border: color.text2,
    },
    primary: {
      color: color.primaryContrast,
      bgColor: color.primaryLight,
      border: color.primary,
    },
    secondary: {
      color: color.accentContrast,
      bgColor: color.accentLight,
      border: color.accent,
    },
  };
  return (
    <button
      data-type={props.type}
      className={css`
        display: inline-block;
        min-width: 80px;
        margin-right: 6px;
        margin-bottom: 4px;
        padding: calc(${space.normal} / 2.2) ${space.normal};
        color: ${stylesType[props.type].color};
        line-height: 1.25rem;
        background-color: ${stylesType[props.type].bgColor};
        border: solid 1px ${stylesType[props.type].border};
        border-radius: ${theme.border.radius};
        outline: none;
        cursor: pointer;
        transition-duration: ${theme.transition.fastest};
        transition-property: box-shadow, background-color, border-color;
        opacity: ${props.disabled ? '0.5' : '1'};
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};
/* eslint-enable react/prop-types */

/**
 * To trigger an operation.
 */
const Button = (props) => {
  const { children, className, type, size, disabled, onClick } = props;

  const doOnClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };

  const buttonCssClassList = [`${ns}-button`];
  const buttonProps = {};

  const validatedType = getValidButtonType(type);

  buttonCssClassList.push(`${ns}-button--type-${validatedType}`);
  if (Object.values(BUTTON_SIZES).includes(size))
    buttonCssClassList.push(`${ns}-button--size-${size}`);
  if (className) buttonCssClassList.push(className);
  if (disabled) buttonProps.disabled = true;

  return (
    <ButtonStyles {...buttonProps} type={validatedType} onClick={doOnClick}>
      <span className={`${ns}-button__label`}>{children}</span>
    </ButtonStyles>
  );
};

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

const getValidButtonType = (type) =>
  Object.values(BUTTON_TYPES)
    .filter((t) => t !== BUTTON_TYPES.Button)
    .includes(type)
    ? type
    : BUTTON_TYPES.Button;

Button.displayName = 'Button';
Button.propTypes = {
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
Button.defaultProps = {
  children: 'Button',
  className: '',
  type: BUTTON_TYPES.Button,
  size: BUTTON_SIZES.M,
  disabled: false,
  onClick() {},
};
Button.Type = { ...BUTTON_TYPES };
Button.Size = { ...BUTTON_SIZES };

export default Button;
