import React from 'react';
import { action } from '@storybook/addon-actions';

import Radio from '../components/radio';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {},
};

export const basic = () => {
  const [value, setValue] = React.useState('b');
  const [label, setLabel] = React.useState('Option B');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={(option) => {
          setValue(option.value);
          setLabel(option.label);
        }}
      >
        <Radio value="a" label={'Option A'} />
        <Radio value="b" label={'Option B'} />
        <Radio value="c" label={'Option C'} />
        <Radio value="d" label={'Option D'} />
        <Radio
          value="other"
          label={
            'Totam fugit veritatis ut cum neque voluptas minus quia. Molestiae architecto non non quis at sunt. Libero repudiandae beatae culpa accusamus minus.'
          }
        />
      </Radio.Group>
      <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>
        {label}, {value} has been selected
      </p>
    </>
  );
};

export const disabledOptions = () => {
  const [value, setValue] = React.useState('c');

  return (
    <Radio.Group
      value={value}
      onChange={(option) => setValue(option.value)}
      disabled
    >
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
      <Radio value="d">Option D</Radio>
    </Radio.Group>
  );
};
