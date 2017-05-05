/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore } from 'redux';

function reducer<S>(state: S): S {
  return state;
}

const store = createStore(reducer);

document.getElementById('content').innerText = store.getState();
