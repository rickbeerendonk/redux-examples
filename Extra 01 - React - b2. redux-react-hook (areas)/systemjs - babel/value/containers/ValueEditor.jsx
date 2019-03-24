/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { change } from '../actions/index';

import NumberBox from '../components/NumberBox';
import Value from '../components/Value';

// Declare outside of the function to prevent infinite recursion.
const mapState = state => ({
  value: state.value
});

function ValueEditor() {
  const { value } = useMappedState(mapState);

  const dispatch = useDispatch();
  const handleValueChange = React.useCallback(
    newValue => dispatch(change(newValue)),
    [dispatch]
  );

  return (
    <React.Fragment>
      <NumberBox onChange={handleValueChange} value={value} />
      <Value value={value} />
    </React.Fragment>
  );
}

export default ValueEditor;
