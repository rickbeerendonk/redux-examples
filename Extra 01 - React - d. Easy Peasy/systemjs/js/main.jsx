/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

import GreetingEditor from './containers/GreetingEditor';

import store from './store';

ReactDOM.createRoot(document.getElementById('app')).render(
  <StoreProvider store={store}>
    <GreetingEditor />
  </StoreProvider>
);
