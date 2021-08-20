import React from 'react';

import Radio from '../components/radio';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {},
};

export const basic = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

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

export const disabled = () => {
  const [value, setValue] = React.useState('a');

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

export const disabledSomeOptions = () => {
  const [value, setValue] = React.useState('');

  return (
    <Radio.Group value={value} onChange={(option) => setValue(option.value)}>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c" disabled>
        Option C
      </Radio>
      <Radio value="d">Option D</Radio>
    </Radio.Group>
  );
};
