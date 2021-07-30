import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '../components/input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
};

export const input = () => {
  const [formValues, setFormValues] = React.useState({
    fname: '',
    lname: '',
    email: '',
  });
  const setValue = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };
  return (
    <>
      <Input
        placeholder=""
        onChange={(v) => setValue('fname', v)}
        label="First Name"
        value={formValues.fname}
      />
      <Input
        placeholder=""
        onChange={(v) => setValue('lname', v)}
        label="Last Name"
        value={formValues.lname}
      />
      <Input
        placeholder=""
        onChange={(v) => setValue('email', v)}
        label="Email"
        value={formValues.email}
      />
      <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>
        <code>{JSON.stringify(formValues, null, '  ')}</code>
      </p>
    </>
  );
};

export const textarea = () => <Input.Textarea label="Address 1" />;

export const textareaValue = () => {
  const text = `Lorem ipsum quae dolores ex saepe neque eum. Pariatur consequuntur et excepturi. Autem culpa commodi est ea expedita dicta qui. Sint laborum et qui voluptatem non.`;
  return <Input.Textarea label="Comment" value={text} />;
};

export const playground = (args) => <Input {...args} />;
