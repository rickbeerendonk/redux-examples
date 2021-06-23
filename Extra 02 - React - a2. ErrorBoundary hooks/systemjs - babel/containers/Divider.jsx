/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeNumerator, changeDenominator } from '../actions/index';

function Divider() {
  // Reading from the Store's state
  const denominator = useSelector(state => state.denominator);
  const numerator = useSelector(state => state.numerator);

  // Writing to the Store's state
  const dispatch = useDispatch();
  const handleDenominatorChange = React.useCallback(
    e => dispatch(changeDenominator(parseInt(e.target.value))),
    [dispatch]
  );
  const handleNumeratorChange = React.useCallback(
    e => dispatch(changeNumerator(parseInt(e.target.value))),
    [dispatch]
  );

  if (denominator === 0) {
    throw new Error('Division by zero.');
  }

  return (
    <div>
      <input onChange={handleNumeratorChange} type="number" value={numerator} />
      <span> divided by </span>
      <input
        autoFocus
        onChange={handleDenominatorChange}
        type="number"
        value={denominator}
      />
      <span> is equal to </span>
      {numerator / denominator}
    </div>
  );
}

export default Divider;
