import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer= "https://dev-65193610.okta.com/oauth2/default" 
          client_id="0oa14e9iwcLLnb8CL5d7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">          
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/details" exact={true} component={Details} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-65193610.okta.com" /> 
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
