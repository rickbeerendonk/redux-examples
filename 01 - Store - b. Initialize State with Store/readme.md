# Store

## Initialize State with Store

We can override the initial reducer state by adding a second parameter to ```createStore```.

Example: We could have save the previous session's state in [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Now we can read the state again and continue our session where we left of last time.

```js
function reducer(state) {
  return state;
}

const store = createStore(reducer);
```

---

Copyright (c) 2019 Rick Beerendonk