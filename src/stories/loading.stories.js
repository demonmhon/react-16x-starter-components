import React from 'react';
import { action } from '@storybook/addon-actions';

import Loading from '../components/loading';
import Button from '../components/button';

export default {
  title: 'Example/Loading',
  component: Loading,
  argTypes: {},
};

export const basic = () => <Loading show />;

export const wrapElement = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
      <Loading show={isLoading}>
        <div style={{ height: '200px', width: '100%' }}>
          <p>
            Quae aut quo quibusdam itaque repellat fuga dignissimos consequatur.
            Dicta quas dicta quam exercitationem dolores nisi. Minima dolorem
            excepturi sint consectetur quod architecto. At fugit ut et nobis
            omnis sed quae qui officia. Autem amet et exercitationem dolore.
          </p>
        </div>
      </Loading>
    </div>
  );
};
