import React, { Component } from 'react';
import './App.css';
import Scripts from '../components/scripts.js'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scripts: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/scripts/')
      .then(response => response.json())
      .then(scripts => this.setState({scripts}))
  }


  render() {
    return (
      <div className="App">
        <Scripts scripts={this.state.scripts} />
      </div>
    );
  }
}

export default App;
