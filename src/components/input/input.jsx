import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import InputPassword from './input-password';
import InputTextarea from './input-textarea';
import './input.scss';

/**
 * Provide the user input is a text field.
 */
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.doOnChange = this.doOnChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  doOnChange(value) {
    const { onChange } = this.props;
    this.setState(
      {
        value: value,
      },
      () => {
        onChange(value);
      }
    );
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
    const { disabled, readOnly, placeholder } = props;

    return (
      <InputWrapper {...props}>
        <input
          type="text"
          placeholder={placeholder}
          onKeyDown={this.onKeyDown}
          onChange={e => this.doOnChange(e.target.value)}
          disabled={disabled}
          readOnly={readOnly}
          value={this.state.value}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  /**
   * One or more class names to be added to the root element (input wrapper) of this component, i.e. `"class-foo class-bar"`.
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
   * ```jsx
   * (value) => {}
   * ```
   *
   * @param {string} value - The input content value.
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  value: '',
  onChange() {},
};

Input.Password = InputPassword;
Input.Textarea = InputTextarea;

export default Input;
