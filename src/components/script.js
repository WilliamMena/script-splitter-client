import React from 'react'
import CaptionSplit from '../containers/captionSplit.js'

const handleOnClick = event => {
  event.preventDefault()
  const id = event.target.name
  // continue on creating the delete button, check where the other actions go to
  this.props.deleteScript(id)
}


const Script = ({script}) => {
  return (
    <div key={script.id}>
      <h4>{script.title}</h4>
      <button name={script.id} onClick={event => handleOnClick(event)} >Delete</button>
      <p>{script.text}</p>
      <CaptionSplit text={script.text} />
    </div>
  )
}

export default Script
