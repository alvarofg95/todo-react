import React from 'react';

export default ({ text, onClick }) => (
  <div>
    <button onClick={onClick}>{text}</button>
  </div>
);
