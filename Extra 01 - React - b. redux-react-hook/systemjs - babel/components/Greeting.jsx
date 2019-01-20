/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ name }) {
  return name && <h1>Hello {name}!</h1>;
}

export default Greeting;
