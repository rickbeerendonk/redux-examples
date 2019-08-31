/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

function Greeting({ name }: IGreetingProps) {
  return Boolean(name) && <h1>Hello {name}!</h1>;
}

export default Greeting;
