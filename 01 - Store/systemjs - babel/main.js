/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore } from 'redux';

function reducer(state) { 
  return state;
}

const store = createStore(reducer);

document.getElementById('content').innerText = store.getState();
