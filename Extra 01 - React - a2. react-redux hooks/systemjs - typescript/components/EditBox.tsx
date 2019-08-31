/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';

interface IEditBoxProps {
  onChange: (value: string) => void;
  name: string;
}

function EditBox({ onChange, name }: IEditBoxProps) {
  return <input onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
