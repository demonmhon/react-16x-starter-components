import React from 'react';

import Checkbox from '../components/checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export const basic = () => (
  <>
    <div>
      <Checkbox>I agree to the Privacy Policy</Checkbox>
    </div>
    <div>
      <Checkbox>Sign up for newsletters</Checkbox>
    </div>
    <div>
      <Checkbox>
        Eius reiciendis dolores quis ut voluptatibus illo vel velit eos.
        Deserunt id sequi in sit inventore praesentium. Minima amet atque
        facilis dolorem. Voluptatem velit nostrum possimus ut dignissimos
        reiciendis quia. Deleniti vitae qui fugit quae voluptatibus. Iure iusto
        sint sint fugit dolore eos nemo.
      </Checkbox>
    </div>
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
