import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import ScriptsList from './containers/scriptsList.js'
import ScriptShow from './containers/scriptShow.js'
import NavBar from './components/NavBar.js'


ReactDOM.render(

    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={App} />
          <Route path="/scripts/:scriptId" component={ScriptShow}/>
          <Route exact path="/scripts" component={ScriptsList} />
        </div>
      </Router>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
