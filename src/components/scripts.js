import React from 'react';
import CaptionSplit from '../containers/captionSplit'

const Scripts = (props) =>
  <div>
    {props.scripts.map(script =>
      <div key={script.id}>
        <h4>{script.title}</h4>
        <p>{script.text}</p>
        <CaptionSplit text={script.text} />
      </div>
    )}
  </div>

export default Scripts
