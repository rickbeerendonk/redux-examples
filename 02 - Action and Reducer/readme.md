# Action and Reducer

## Actions

After the store is initialized, we can dispatch actions to the store.

An action has a type (string) and potentially a payload.

```js
const CHANGE_NAME = 'CHANGE_NAME';

store.dispatch({
  type: CHANGE_NAME,
  payload: 'Action'
});
```

## Reducer

After dispatching the action to the store, the store will call the reducer function that it is linked to. It will pass the action as the second parameter to the reducer.

The reducer will change the state based on the information in the action.

```js
function reducer(state = { name: 'Reducer' }, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
```

We can read the store's state afterwards:

```js
store.getState().name;
```

---

Copyright (c) 2019 Rick Beerendonk