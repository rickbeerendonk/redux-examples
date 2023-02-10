/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ErrorBoundary from './containers/ErrorBoundary';
import Divider from './containers/Divider';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <ErrorBoundary>
      <Divider />
    </ErrorBoundary>
  </Provider>
);
