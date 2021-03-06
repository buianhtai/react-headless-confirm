import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { ConfirmProvider } from '..';
import Dialog from './Dialog';
import Demo from './Demo';

const App = () => {
  return (
    <ChakraProvider>
      <ConfirmProvider dialog={Dialog}>
        <Demo />
      </ConfirmProvider>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
