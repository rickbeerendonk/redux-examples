/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { change } from '../actions/index';

import NumberBox from '../components/NumberBox';
import Value from '../components/Value';

function ValueEditor() {
  const value = useSelector(state => state.value);

  const dispatch = useDispatch();

  const handleChangeValue = React.useCallback(
    name => dispatch(change(name)),
    [dispatch]
  );

  return (
    <React.Fragment>
      <NumberBox onChange={handleChangeValue} value={value} />
      <Value value={value} />
    </React.Fragment>
  );
}

export default ValueEditor;
