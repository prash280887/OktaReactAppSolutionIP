import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

   logout = async () => {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    if (idToken != null) {
      localStorage.removeItem("okta-token-storage");
    }
    //2. redirect to loginpage
    window.location.href = "/";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Okta React Demo Portal
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details">
                  My Details
                </Link>
              </li>
              <li className="nav-item">
              <button className="btn btn-sm" onClick={this.logout}>Signout</button> 
              </li>                    
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
