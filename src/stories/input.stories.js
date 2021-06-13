import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '../components/input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
};

export const input = () => (
  <>
    <Input placeholder="" label="First Name" />
    <Input placeholder="" label="Last Name" />
    <Input placeholder="" label="Email" />
  </>
);

export const textarea = () => <Input.Textarea label="Address 1" />;

export const textareaValue = () => {
  const text = `Lorem ipsum quae dolores ex saepe neque eum. Pariatur consequuntur et excepturi. Autem culpa commodi est ea expedita dicta qui. Sint laborum et qui voluptatem non.`;
  return <Input.Textarea label="Comment" value={text} />;
};

export const playground = (args) => <Input {...args} />;
