import React, { Component } from 'react';
class AppHeader extends Component {
  render () {
    return (
      <div className="app-header">
        <div className="logo-container">
          <img className="header-logo" src={require('./svg/logo-01.png')} alt="spartan-header" />
        </div>
      </div>
    );
  }
}

export default AppHeader;