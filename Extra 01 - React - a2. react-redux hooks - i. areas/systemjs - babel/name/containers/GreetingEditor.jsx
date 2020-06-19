/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { change } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function GreetingEditor() {
  const name = useSelector(state => state.name);

  const dispatch = useDispatch();
  const handleChangeName = React.useCallback(name => dispatch(change(name)), [
    dispatch
  ]);

  return (
    <React.Fragment>
      <EditBox onChange={handleChangeName} name={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

export default GreetingEditor;
