import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Home from '../components/Home.js'
import ScriptsList from './scriptsList.js'
import ScriptShow from './scriptShow.js'
import NavBar from '../components/NavBar.js'

class App extends Component {



  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/scripts/:scriptId" component={ScriptShow}/>
            <Route exact path="/scripts" component={ScriptsList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
