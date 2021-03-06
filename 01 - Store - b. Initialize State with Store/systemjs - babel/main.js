/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createStore } from 'redux';

function reducer(state = 'Reducer') {
  return state;
}

const store = createStore(reducer, 'CreateStore');

document.getElementById('content').innerText = store.getState();
