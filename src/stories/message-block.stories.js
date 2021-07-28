import React from 'react';
import { action } from '@storybook/addon-actions';

import MessageBlock from '../components/message-block';

export default {
  title: 'Example/MessageBlock',
  component: MessageBlock,
  argTypes: {},
};

export const basic = () => (
  <>
    <MessageBlock>This is an info block.</MessageBlock>
    <MessageBlock type={MessageBlock.Type.Warning}>
      This is an warning block.
    </MessageBlock>
    <MessageBlock type={MessageBlock.Type.Error}>
      This is an error block.
    </MessageBlock>
  </>
);

export const playground = (args) => <MessageBlock {...args} />;
