/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeName } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

const GreetingEditor = ({name, changeName}) => (
  <div>
    <EditBox onChange={changeName} name={name} />
    <Greeting name={name} />
  </div>
);

const mapStateToProps = state => ({
  name: state.name
})

const mapDispatchToProps = dispatch => ({
  changeName: bindActionCreators(changeName, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingEditor)