import React, { Component } from 'react';
import './App.css';
import ScriptForm from '../components/scriptForm.js'

class App extends Component {


  render() {
    return (
        <div>
          <h3>Enter new script</h3>
          <ScriptForm />
        </div>
    );
  }
}

export default App;
