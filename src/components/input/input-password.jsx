import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import './input.scss';

class InputPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.doOnChange = this.doOnChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
          value: nextProps.value
      });
    }
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
    const { disabled, readOnly, label: placeholder } = props;

    return (
      <InputWrapper {...props}>
        <input
          type="password"
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

InputPassword.propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
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

InputPassword.defaultProps = {
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  value: '',
  onChange() {},
};

export default InputPassword;
