import React from 'react';

import Dialog from '../components/dialog';
import Button from '../components/button';

export default {
  title: 'Example/Dialog',
  component: Dialog,
  argTypes: {},
};

export const basic = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
      <Dialog show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{ padding: '0.5rem 1rem' }}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </>
  );
};

export const centered = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
      <Dialog
        centered
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <div style={{ padding: '0.5rem 1rem' }}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </>
  );
};

export const fullScreen = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
      <Dialog
        fullScreen
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <div style={{ padding: '0.5rem 1rem' }}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </>
  );
};

export const modal = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
      <Dialog modal show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{ padding: '0.5rem 1rem' }}>
          <p>Dialog content</p>
          <p>
            You cannot close this dialog with ESC button or click outside
            dialog. Only defined action like click the Close button would.
          </p>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </div>
      </Dialog>
    </>
  );
};
