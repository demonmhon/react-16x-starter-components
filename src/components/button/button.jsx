import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './button.scss';

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
    const { children, className, disabled } = props;

    const buttonCssClassList = [`${ALIAS}-button`];
    const buttonProps = {};

    if (disabled) buttonCssClassList.push(`${ALIAS}-button--disabled`);
    if (className) buttonCssClassList.push(className);

    if (disabled) buttonProps.disabled = true;
    return (
      <button
        {...buttonProps}
        className={buttonCssClassList.join(' ')}
        onClick={e => this.doOnClick(e)}>
        <span className={`${ALIAS}-button__label`}>{children}</span>
      </button>
  );
  }
}

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
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  className: '',
  disabled: false,
  onClick() {}
};

export default Button;
