import React from 'react';

const Scripts = (props) =>
  <div>
    {props.scripts.map(script =>
      <div key={script.id}>
        <h4>{script.title}</h4>
        <p>{script.text}</p>
      </div>
    )}
  </div>

export default Scripts
