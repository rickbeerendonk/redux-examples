# (Un)Subscribe

## Subscribe

To subscribe to store changes, provide a callback to the store's ```subscribe``` method. The callback will be called every time the store's state changes.

```js
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
```

## Unsubscribe

The store doesn't have an unsubscribe method. Instead, the ```subscribe``` method returns the unsubscribe method, to stop this specific subscription.

```js
const unsubscribe = store.subscribe(...);
unsubscribe();
```

---

Copyright (c) 2019 Rick Beerendonk