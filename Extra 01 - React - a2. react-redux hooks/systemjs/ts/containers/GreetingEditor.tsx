/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeName } from '../actions/index';
import { Store } from '../types/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function GreetingEditor() {
  const name = useSelector((state: Store) => state.name);

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
