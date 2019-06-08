# Action Creator

Instead of creating the Action directly, we can use action creator functions to do that for us.

```js
const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}
```

Creating and dispatching an action now looks like this:

```js
store.dispatch(changeName('ActionCreator'));
```

---

Copyright (c) 2019 Rick Beerendonk