import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import ScriptsList from './containers/scriptsList.js'
import ScriptShow from './containers/scriptShow.js'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/scripts"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Scripts</NavLink>
  </div>;



ReactDOM.render(

    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={App} />
          <Route path="/scripts/:scriptId" component={ScriptShow}/>
          <Route exact path="/scripts" component={ScriptsList} />
        </div>
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
