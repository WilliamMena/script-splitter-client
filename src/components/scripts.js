import React from 'react';

const Scripts = (props) =>
  <div>
    {props.scripts.map((script, index) =>
      <div key={index}>
        <h4>{script.title}</h4>
        <p>{script.text}</p>
      </div>
    )}
  </div>

export default Scripts
