# Store

## Initialize State with Reducers

When the store is created, the reducer is called once with state = undefined. This gives us the opportunity to initialize the state with a different default.

```js
function reducer(state = 'Reducer') {
  return state;
}
```

---

Copyright (c) 2019 Rick Beerendonk