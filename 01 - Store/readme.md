# Store

A store is created with a call to ```createStore```. A reducer function is passed as a parameter. The simplest reducer possible just returns the state it receives.

```js
import { createStore } from 'redux';

function reducer(state) {
  return state;
}

const store = createStore(reducer);
```

---

Copyright (c) 2019 Rick Beerendonk