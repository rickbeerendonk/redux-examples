/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function GreetingEditor() {
  const name = useStoreState(state => state.user.name);
  const upperCaseName = useStoreState(state => state.user.upperCaseName);
  const changeName = useStoreActions(actions => actions.user.changeName);

  const handleNameChange = React.useCallback(newName => changeName(newName), [
    changeName
  ]);

  return (
    <React.Fragment>
      <EditBox onChange={handleNameChange} name={name} />
      <Greeting name={name} />
      <Greeting name={upperCaseName} />
    </React.Fragment>
  );
}

export default GreetingEditor;
