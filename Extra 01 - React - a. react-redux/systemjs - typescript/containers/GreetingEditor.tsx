/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Store } from '../types/index';
import * as nameActions from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

interface IGreetingEditorValueProps {
  name: string;
}

interface IGreetingEditorFunctionProps {
  changeName: (name: string) => void;
}

interface IGreetingEditorProps
  extends IGreetingEditorValueProps,
    IGreetingEditorFunctionProps {}

function GreetingEditor({ name, changeName }: IGreetingEditorProps) {
  return (
    <React.Fragment>
      <EditBox onChange={changeName} name={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

function mapStateToProps(state: Store) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch: Dispatch<nameActions.NameActions>) {
  return bindActionCreators(
    {
      changeName: nameActions.changeName
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingEditor);
