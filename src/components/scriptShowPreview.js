import React from 'react';

import CaptionSplit from '../containers/captionSplit.js'

const ScriptShowPreview = ({script}) =>
  <div key={script.id}>
    <h1>{script.title}</h1>
    <p>Split by {script.characters || 45} characters</p>
    <p>{script.text}</p>

    <CaptionSplit characters={script.characters} text={script.text} />

  </div>


export default ScriptShowPreview;
