import React, {Component} from 'react';

class ScriptInput extends Component {
  constructor(props) {
    super()

    this.state = {
      title: '',
      script: ''
    }
  }

// ADJUST THE FORM TO SAVE TO THE STATE

  render() {
    return (
      <div>
        <form>
          <label>Title </label>
          <input type='text' />
          <br/>
          <br/>
          <textarea rows='8' cols='100' />

          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}


export default ScriptInput
