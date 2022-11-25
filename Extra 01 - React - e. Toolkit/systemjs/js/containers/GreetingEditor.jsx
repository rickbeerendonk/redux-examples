/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeName } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function GreetingEditor({ name, changeName }) {
  return (
    <React.Fragment>
      <EditBox onChange={changeName} name={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeName
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingEditor);
