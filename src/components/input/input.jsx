import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.doOnChange = this.doOnChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.getLabelEl = this.getLabelEl.bind(this);
  }

  getLabelEl() {
    return (
      <span className={`${ALIAS}-input__label`}>{this.props.label}</span>
    );
  }

  doOnChange(value) {
    const { onChange } = this.props;
    this.setState({
      value: value
    }, () => {
      onChange(value);
    });
  }

  onKeyDown(e) {
    /**
     * keyCode
     * 13 = Enter -- Trigger the onChange immediately.
     */
    if (e.keyCode === 13) {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    const props = this.props;
    const { className, disabled, label: labelText, placeholder } = props;

    const inputCssClassList = [`${ALIAS}-input`];

    return (
      <div className={inputCssClassList.join(' ')}>
        <label>
          {labelText ? this.getLabelEl() : null}
          <input
            type="text"
            placeholder={placeholder}
            onKeyDown={this.onKeyDown}
            onChange={e => this.doOnChange(e.target.value)}
            disabled={disabled}
            value={this.state.value}
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Disables the button if set to true. Disabled button won't trigger the `onClick`.
   */
  disabled: PropTypes.bool,
  /**
   * Label of input
   */
  label: PropTypes.string,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Input type:
   *
   * * `text`
   */
  type: PropTypes.string,
  /**
   * A callback function, executed when the input is changed.
   *
   * ```jsx
   * (value) => {}
   * ```
   *
   * @param {string} value - The input content value.
   */
  onChange: PropTypes.func
};

Input.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  placeholder: '',
  type: 'text',
  onChange() {}
};

export default Input;
