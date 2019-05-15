import React, { Component } from 'react';
// import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import { getScripts } from '../actions/scripts.js'

import './App.css';
import Home from '../components/Home.js'
import ScriptsList from './scriptsList.js'
import ScriptShow from './scriptShow.js'
import ScriptXml from './scriptXml.js'
// const ScriptXml = React.lazy(() => import('./scriptXml.js'))
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
            <Route exact path="/scripts/:scriptId" component={ScriptShow}/>
            <Route exact path="/scripts" render={() => <ScriptsList scripts={this.props.scripts} />} />
            <Route exact path="/scripts/:scriptId/xml" component={ScriptXml}/>
            {/* <Route exact path="/scripts/:scriptId/xml" render={() => (
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <ScriptXml />
                </Suspense>
            </div>
            )}/> */}
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
