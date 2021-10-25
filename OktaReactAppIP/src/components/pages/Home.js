import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Navbar from '../../components/layout/Navbar';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
     <div>
         <Navbar />  
       <div>
          <br/>This is the home web page displayed on sucessful Okta login.
          <br/>          
          Click on My details to view login user details as fetched in the authentication token sent by Okta Server.
          <br/>
          Click Sign Out link to logout from Okta react demo application. 
          </div>
      </div>
      ) : (
        <div>
          <button className="btn" onClick={this.login}>start Okta React Demo</button>
        </div>
      );

      return (
        <div>{mainContent}</div>         
      );
    }
  }
);
