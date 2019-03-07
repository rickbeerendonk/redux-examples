/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { changeName } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

// Declare outside of the function to prevent infinite recursion.
const mapState = state => ({
  name: state.name
});

function GreetingEditor() {
  const { name } = useMappedState(mapState);

  const dispatch = useDispatch();
  const handleNameChange = React.useCallback(
    newName => dispatch(changeName(newName)),
    [dispatch]
  );

  return (
    <React.Fragment>
      <EditBox onChange={handleNameChange} name={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

export default GreetingEditor;
