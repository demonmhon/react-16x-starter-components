import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.doOnClick = this.doOnClick.bind(this);
  }

  doOnClick(e) {
    if (!this.props.disabled && !this.props.isLoading) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <div><button onClick={e => this.doOnClick(e)} /></div>
    );
  }
}

Button.propTypes = {
  /**
   * Disables the button if set to true. Disabled button won't trigger the `onClick`.
   */
  disabled: PropTypes.bool,
  /**
   * A callback function that is triggered when button clicked.
   * ```jsx
   * e => {}
   * ```
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  onClick() {}
};

export default Button;
