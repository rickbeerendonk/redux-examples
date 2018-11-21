/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

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

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  changeName: bindActionCreators(changeName, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingEditor);