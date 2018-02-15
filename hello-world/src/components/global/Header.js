import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Hello World React</h2>
      </div>
    </div>
    );
  }
}

export default Header;
