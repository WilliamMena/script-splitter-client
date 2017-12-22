import React from 'react';



const splitText = (text) => {
  const limit = 45
  let currentCaptionCount = 0
  const textArray = text.split(" ")
  const captionsArray = [""];
  for (let i=0; i<textArray.length; i++) {
    if ((captionsArray[currentCaptionCount].length + textArray[i].length) < limit+1 ) {
      captionsArray[currentCaptionCount] += `${textArray[i]} `
    } else {
      // I need to slice the last empty space of the array OR
      // I need to create arrays for each instance and then at the end join and take out of array
      currentCaptionCount += 1
      captionsArray.push("")
    }
  }

  return captionsArray.map(caption => <li>{caption}</li>)
}


const CaptionSplit = (props) =>
  <div>
      {splitText(props.text)}
  </div>

export default CaptionSplit
