import React from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import './message-block.scss';

const MESSAGE_BLOCK_TYPES = {
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
};

const MessageBlock = (props) => {
  const { children, className, type } = props;

  const messageBlockCssClassList = [`${ns}-message-block`];

  const validatedType = Object.values(MESSAGE_BLOCK_TYPES).includes(type)
    ? type
    : MESSAGE_BLOCK_TYPES.Info;
  messageBlockCssClassList.push(`${ns}-message-block--type-${validatedType}`);
  if (className) messageBlockCssClassList.push(className);

  return (
    <div
      data-type={validatedType}
      className={messageBlockCssClassList.join(' ')}
    >
      {children ? children : <>&nbsp;</>}
    </div>
  );
};

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Message Block type:
   *
   * * `info`
   * * `warning`
   * * `error`
   */ type: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: '',
  type: MESSAGE_BLOCK_TYPES.Info,
};

MessageBlock.displayName = 'MessageBlock';
MessageBlock.propTypes = propTypes;
MessageBlock.defaultProps = defaultProps;
MessageBlock.Type = { ...MESSAGE_BLOCK_TYPES };

export default MessageBlock;
