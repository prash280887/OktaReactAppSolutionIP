import React, { Component } from 'react';
import Navbar from '../../components/layout/Navbar';

class Details extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
       <Navbar />
        <h1>Hi, {currentUserName}</h1>
        <p>Okta Login Email: {currentUserEmail}</p>
      </div>
    );
  }
}

export default Details;
