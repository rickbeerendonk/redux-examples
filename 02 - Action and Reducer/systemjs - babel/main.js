/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';

function reducer(state = {name: 'Reducer'}, action) { 
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.payload};
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: CHANGE_NAME,
  payload: 'Action'
});

document.getElementById('content').innerText = store.getState().name;
