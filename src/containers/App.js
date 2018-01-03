import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import { getScripts } from '../actions/scripts.js'

import './App.css';
import Home from '../components/Home.js'
import ScriptsList from './scriptsList.js'
import ScriptShow from './scriptShow.js'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

class App extends Component {

  componentDidMount() {
    this.props.getScripts()
  }


  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            {/*
              <Route path="/scripts/:scriptId" render={
                () => <ScriptShow scripts={this.props.scripts} />
              } />
            */}
            <Route path="/scripts/:scriptId" component={ScriptShow}/>
            <Route exact path="/scripts" render={() => <ScriptsList scripts={this.props.scripts} />} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    scripts: state.scripts
  })
}

export default connect(mapStateToProps, {getScripts})(App);
