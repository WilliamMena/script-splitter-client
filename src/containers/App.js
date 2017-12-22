import React, { Component } from 'react';
import './App.css';
import Scripts from '../components/scripts.js'

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scripts: [],
      loading: true
    }
  }


  componentDidMount() {
    fetch(`${API_URL}/scripts`)
      .then(response => response.json())
      .then(scripts => this.setState({scripts, loading: false}))
  }


  render() {
    return (
      <div className="App">
        <h1>All Scripts</h1>
        {this.state.loading ?
          <h1>Loading!!!</h1>
          :
          <Scripts scripts={this.state.scripts} />
        }
      </div>
    );
  }
}

export default App;
