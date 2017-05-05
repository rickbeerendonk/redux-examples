/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore } from 'redux';

function reducer(state = 'Reducer'): string {
  return state;
}

const store = createStore(reducer, 'CreateStore');

document.getElementById('content').innerText = store.getState();
