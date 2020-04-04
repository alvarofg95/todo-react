import React, { Fragment } from 'react';

export default ({ data }) => (
  <Fragment>
    {data.map(note => (
      <div>
        <span>{note.title}</span>
      </div>
    ))}
  </Fragment>
);
