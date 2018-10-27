/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function Greeting({ name }) {
  return name && <h1>Hello {name}!</h1>;
}

export default Greeting;
