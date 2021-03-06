import React from 'react';

import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
}

export const Basic = () => <Button />;

export const Size = () => (
  <>
    <Button size={Button.Size.ExtraSmall}>Extra Small</Button>
    <Button size={Button.Size.Small}>Small</Button>
    <Button>Medium</Button>
    <Button size={Button.Size.Large}>Large</Button>
  </>
)

export const Disabled = () => (
  <>
    <Button disabled />
    <Button disabled type={Button.Type.Primary}>Primary</Button>
    <Button disabled type={Button.Type.Secondary}>Secondary</Button>
  </>
)
