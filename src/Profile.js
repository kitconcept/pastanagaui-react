import React, { Component } from 'react';
import Icon from './Icon/Icon';
import logoutSVG from './icons/log-out.svg';
import backSVG from './icons/back.svg';

class Profile extends Component {
  pull = () => {
    this.props.unloadComponent();
  };

  render() {
    return (
      <div
        className="profile pastanaga-menu"
        style={{
          left: `${this.props.componentIndex * 100}%`,
          width: '100vw',
        }}
      >
        <header className="header pulled">
          <button onClick={this.pull}>
            <Icon name={backSVG} size="36px" />
          </button>
          <div className="vertical divider" />
          <h2>Profile</h2>
        </header>
      </div>
    );
  }
}

export default Profile;
