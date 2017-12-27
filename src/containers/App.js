import React, { Component } from 'react';
import './App.css';
import Scripts from './scripts.js'
import ScriptForm from '../components/scriptForm.js'

class App extends Component {


  render() {
    return (
      <div className="App">
          <div>
            <h3>Enter new script</h3>
            <ScriptForm />
            <h1>All Scripts</h1>
            <Scripts />
          </div>
      </div>
    );
  }
}

export default App;
