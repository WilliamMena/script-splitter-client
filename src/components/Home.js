import React from 'react';
import ScriptForm from './scriptForm.js'
const Home = (props) => {
  return(
    <div className="Home">
      <div className="Script-form">
        <ScriptForm history={props.history} />
      </div>

      <div className="Home-Instructions">
        <div className="Home-Instructions">
          <h2>Instructions/Info</h2>
          <p>The purpose of this website is to split your script into separate captions. Making it easier for you to just copy and paste into your editing software of choice. But to get the best results, you will need to do some prepping beforehand.</p>

          <p>So in it's current form, this primarily works for 'single person scripts' due to the fact that it only splits the text that it's given. So this would be useful for people giving talks. A one man web show. Instructional videos and things of that nature.</p>

          <p>So for this to work correctly, You would have to paste into the text area ONLY THE DIALOGUE. If you enter things like the person who's talking, then it will also split that into the caption as well. As the application develops, we'll work on having our app recognize things other than dialogue. But for the time being, this is what we're working with.</p>

          <p>So back to exactly what you need to make this work properly. We need ONLY THE DIALOGUE. No location. No character. No transitions or camera info like in regular scripts. Only dialogue. The next thing we need is the character count. By default it's set to 45 but under your text area you can enter what number you want to work with.</p>

          <p>You should create one caption in your editor of choice, check how many letters fit. Make sure that the font and text size are what you're going to use for the final export. Then count how many characters, including the spaces, and that will be your number that you put under the text box.</p>
        </ div>
      </ div>
    </ div>
  )
}

export default Home
