import React from 'react';
import PropTypes from 'prop-types';

import css from './message-block.scss';

const MESSAGE_BLOCK_TYPES = {
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
};

function MessageBlock(props) {
  const { children, className, type } = props;

  const messageBlockCssClassList = [css[`message-block`]];

  if (Object.values(MESSAGE_BLOCK_TYPES).includes(type))
    messageBlockCssClassList.push(css[`message-block--type-${type}`]);
  if (className) messageBlockCssClassList.push(className);

  return <div className={messageBlockCssClassList.join(' ')}>{children}</div>;
}

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string
  /**
   * Message Block type:
   *
   * * `info`
   * * `warning`
   * * `error`
   */,
  type: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: '',
  type: MESSAGE_BLOCK_TYPES.Info,
};

MessageBlock.propTypes = propTypes;
MessageBlock.defaultProps = defaultProps;
MessageBlock.Type = { ...MESSAGE_BLOCK_TYPES };

export default MessageBlock;
