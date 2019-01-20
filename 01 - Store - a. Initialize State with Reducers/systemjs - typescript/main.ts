/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createStore, Store } from 'redux';

function reducer(state = 'Reducer'): string {
  return state;
}

const store: Store<string> = createStore(reducer);

document.getElementById('content').innerText = store.getState();
