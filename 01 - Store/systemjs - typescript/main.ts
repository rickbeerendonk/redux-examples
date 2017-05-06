/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore, Store } from 'redux';

function reducer<S>(state: S): S {
  return state;
}

const store: Store<undefined> = createStore(reducer);

document.getElementById('content').innerText = store.getState();
