import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import css from './checkbox.scss';

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
   * Specifies whether the checkbox is checked.
   */
  checked: PropTypes.bool,
  /**
   * Disables the checkbox if set to true. Disabled checkbox won't trigger the `onChange`.
   */
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

const defaultProps = {
  children: '',
  className: '',
  disabled: false,
  checked: false,
  onChange() {},
};

/**
 * Checkbox
 */
class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.doOnChange = this.doOnChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.checked !== nextProps.checked) {
      this.setState({
        value: nextProps.checked,
      });
    }
  }

  doOnChange(e) {
    const { onChange, disabled } = this.props;
    if (!disabled) {
      onChange();
      e.stopPropagation();
    }
  }

  render() {
    const { children, className, checked, disabled } = this.props;
    const checkboxCssClassList = [css.checkbox];
    const checkboxProps = {};

    if (className) checkboxCssClassList.push(className);
    if (disabled) {
      checkboxCssClassList.push(css['checkbox--disabled']);
      checkboxProps.disabled = true;
    }

    return (
      <label className={checkboxCssClassList.join(' ')}>
        <div className={css.checkbox__container}>
          <input type="checkbox" defaultChecked={checked} {...checkboxProps} onChange={e => this.doOnChange(e)} />
          <span className={css.checkbox__ui} />
          <div className={css.checkbox__label}>{children}</div>
        </div>
      </label>
    );
  }
}

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = defaultProps;

export default Checkbox;
