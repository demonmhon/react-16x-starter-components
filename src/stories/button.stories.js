import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      options: Object.keys(Button.Type).map((k) => Button.Type[k]),
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(Button.Size).map((k) => Button.Size[k]),
      control: { type: 'radio' },
    },
  },
};

export const types = () => (
  <>
    <Button />
    <Button type={Button.Type.Primary}>Primary</Button>
    <Button type={Button.Type.Secondary}>Secondary</Button>
  </>
);

export const sizes = () => (
  <>
    <div>
      <Button size={Button.Size.ExtraSmall}>Extra Small</Button>
      <Button size={Button.Size.Small}>Small</Button>
      <Button>Medium</Button>
      <Button size={Button.Size.Large}>Large</Button>
    </div>
    <div style={{ marginTop: '15px' }}>
      <Button type={Button.Type.Primary} size={Button.Size.ExtraSmall}>
        Extra Small
      </Button>
      <Button type={Button.Type.Primary} size={Button.Size.Small}>
        Small
      </Button>
      <Button type={Button.Type.Primary}>Medium</Button>
      <Button type={Button.Type.Primary} size={Button.Size.Large}>
        Large
      </Button>
    </div>
    <div style={{ marginTop: '15px' }}>
      <Button type={Button.Type.Secondary} size={Button.Size.ExtraSmall}>
        Extra Small
      </Button>
      <Button type={Button.Type.Secondary} size={Button.Size.Small}>
        Small
      </Button>
      <Button type={Button.Type.Secondary}>Medium</Button>
      <Button type={Button.Type.Secondary} size={Button.Size.Large}>
        Large
      </Button>
    </div>
  </>
);

export const disabled = () => (
  <>
    <Button disabled />
    <Button disabled type={Button.Type.Primary}>
      Primary
    </Button>
    <Button disabled type={Button.Type.Secondary}>
      Secondary
    </Button>
  </>
);

export const clickedEvent = () => <Button onClick={action('Button clicked')} />;

export const playground = (args) => <Button {...args} />;
