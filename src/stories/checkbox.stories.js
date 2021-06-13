import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../components/checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export const basic = () => (
  <>
    <Checkbox>I agree to the Privacy Policy</Checkbox>
    <Checkbox>Sign up for newsletters</Checkbox>
  </>
);

export const checked = () => (
  <Checkbox checked>Sign up for newsletters</Checkbox>
);

export const onChange = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        Sign up for newsletters
      </Checkbox>
      <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>
        Checkbox checked: {checked.toString()}
      </p>
    </>
  );
};

export const complexChild = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        I agree to the{' '}
        <a href="#" style={{ textDecoration: 'underline' }} target="_blank">
          Privacy Policy
        </a>
      </Checkbox>
    </>
  );
};

export const playground = (args) => <Checkbox {...args} />;
