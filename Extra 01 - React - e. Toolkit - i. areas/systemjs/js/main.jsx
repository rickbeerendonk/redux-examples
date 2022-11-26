/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import GreetingEditor from './name/containers/GreetingEditor';
import ValueEditor from './value/containers/ValueEditor';

import reducer from './reducers/index';

const store = configureStore({
  reducer,
  devTools: true
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <GreetingEditor />
    <ValueEditor />
  </Provider>
);
