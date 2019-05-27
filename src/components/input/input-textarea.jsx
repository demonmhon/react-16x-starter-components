import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import './input.scss';

class InputTextarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.doOnChange = this.doOnChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
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
    const { disabled, label: placeholder } = props;

    return (
      <InputWrapper {...props}>
        <textarea
          placeholder={placeholder}
          onKeyDown={this.onKeyDown}
          onChange={e => this.doOnChange(e.target.value)}
          disabled={disabled}
          defaultValue={this.state.value} />
      </InputWrapper>
    );
  }
}

InputTextarea.propTypes = {
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
  onChange: PropTypes.func
};

InputTextarea.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  placeholder: '',
  value: '',
  onChange() {}
};

export default InputTextarea;
