import React from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './input-wrapper';
import './input.scss';

const propTypes = {
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
   * Visible number of lines in a text area
   */
  rows: PropTypes.number,
  /**
   * Initial value
   */
  value: PropTypes.string,
  /**
   * A callback function, executed when the input is changed.
   *
   * ```(value) => {}```
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  disabled: false,
  readOnly: false,
  label: '',
  placeholder: '',
  rows: 3,
  value: '',
  onChange() {},
};
class InputTextarea extends React.Component {
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
        value: nextProps.value,
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
    const { disabled, readOnly, label: placeholder, rows } = props;

    return (
      <InputWrapper {...props}>
        <textarea
          placeholder={placeholder}
          rows={rows}
          onKeyDown={this.onKeyDown}
          onChange={e => this.doOnChange(e.target.value)}
          disabled={disabled}
          readOnly={readOnly}
          defaultValue={this.state.value}
        />
      </InputWrapper>
    );
  }
}

InputTextarea.propTypes = propTypes;
InputTextarea.defaultProps = defaultProps;

export default InputTextarea;
