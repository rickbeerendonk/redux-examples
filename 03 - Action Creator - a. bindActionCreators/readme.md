# Action Creator

## bindActionCreators

In the previous example, we dispatched actions to the store like this:

```js
store.dispatch(changeName('ActionCreator'));
```

However, some code might not know about the store. For example, if you pass a callback function to a React presentational component. For those situations, we can create one function that both creates the action and passes it to the store. We use the```bindActionCreators``` from Redux.

```js
import { bindActionCreators } from 'redux';

const boundChangeName = bindActionCreators(changeName, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundChangeName('boundActionCreator');
```

---

Copyright (c) 2019 Rick Beerendonk