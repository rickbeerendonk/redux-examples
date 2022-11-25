/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeName } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function GreetingEditor() {
  // Reading from the Store's state
  const name = useSelector(state => state.name);

  // Writing to the Store's state
  const dispatch = useDispatch();
  const handleChangeName = React.useCallback(
    name => dispatch(changeName(name)),
    [dispatch]
  );

  return (
    <React.Fragment>
      <EditBox onChange={handleChangeName} name={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

export default GreetingEditor;
