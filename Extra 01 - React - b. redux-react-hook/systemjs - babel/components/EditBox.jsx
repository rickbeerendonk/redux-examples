/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function EditBox({ onChange, name }) {
  return <input onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
