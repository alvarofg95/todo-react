import React from 'react';

export default ({ name, placeholder, textArea, onChange }) =>
  textArea ? (
    <textarea name={name} placeholder={placeholder} onChange={onChange} />
  ) : (
    <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
  );
