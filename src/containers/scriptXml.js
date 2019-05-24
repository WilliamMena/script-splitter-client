import React from 'react';

const API_URL = process.env.REACT_APP_API_URL


var current_url = window.location.href.split('/')
var specific_id = current_url[current_url.length - 2]
// var myString = `
// <tt xml:lang="en" tts:extent="1920px 1080px"
// xmlns:tts="http://www.w3.org/ns/ttml#styling">
// <head>
//   <!-- <layout>

//   </layout> -->
// </head>
// <body>
//   <div xml:lang="en">
//   `

  fetch(`${API_URL}/scripts/${specific_id}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}})
    .then(response => response.json())
    .then(script => {
      // console.log(script.captions.map(function(caption) {
      //   return `<p begin="${caption.in_point}:00" end="${caption.out_point}:00">
      //     ${caption.text}
      //   </p>`
      // }))
      
//       script.captions.sort(function(a, b){return a.id-b.id}).map(function(caption) {
//         myString += `
//         <p begin="${caption.in_point}:00" end="${caption.out_point}:00">
//           ${caption.text}
//         </p>`
//       })

//       myString += `
//   </div>
// </body>
// </tt>
//       `

//       var link = document.createElement('a');
//       link.download = 'script.xml';
//       var blob = new Blob([myString], {type: 'application/xml'});
//       link.href = window.URL.createObjectURL(blob);
//       link.click();
    })




const ScriptXml = (props) =>
  <div>
    Check your console for the XML
  </div>

export default ScriptXml
