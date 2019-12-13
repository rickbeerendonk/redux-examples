/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeNumerator, changeDenominator } from '../actions/index';

function Divider({
  numerator,
  denominator,
  changeNumerator,
  changeDenominator
}) {
  if (denominator === 0) {
    throw new Error('Division by zero.');
  }

  function handleNumeratorChange(e) {
    changeNumerator(parseInt(e.target.value));
  }

  function handleDenominatorChange(e) {
    changeDenominator(parseInt(e.target.value));
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

function mapStateToProps(state) {
  return {
    denominator: state.denominator,
    numerator: state.numerator
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeDenominator,
      changeNumerator
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Divider);
