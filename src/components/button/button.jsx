import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './button.scss';

const blockCssName = `${ALIAS}-button`;

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
   * ```jsx
   * e => {}
   * ```
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
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.doOnClick = this.doOnClick.bind(this);
  }

  doOnClick(e) {
    if (!this.props.disabled) {
      this.props.onClick(e);
    }
  }

  render() {
    const props = this.props;
    const { children, className, type, disabled } = props;

    const buttonCssClassList = [blockCssName];
    const buttonProps = {};

    if (['primary', 'secondary', 'button'].includes(type))
      buttonCssClassList.push(`${blockCssName}--type-${type}`);
    if (className) buttonCssClassList.push(className);
    if (disabled) buttonProps.disabled = true;
    return (
      <button
        {...buttonProps}
        className={buttonCssClassList.join(' ')}
        onClick={e => this.doOnClick(e)}
      >
        <span className={`${blockCssName}__label`}>{children}</span>
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
