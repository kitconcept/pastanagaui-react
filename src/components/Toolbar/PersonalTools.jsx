import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../components';

import logoutSVG from '../../icons/log-out.svg';
import rightArrowSVG from '../../icons/right-key.svg';
import avatar from './avatar.jpg';

class PersonalTools extends Component {
  static propTypes = {
    loadComponent: PropTypes.func.isRequired,
    componentIndex: PropTypes.number.isRequired,
  };

  push = selector => {
    this.setState(() => ({
      pushed: true,
    }));
    this.props.loadComponent(selector);
  };

  render() {
    return (
      <div
        className="personal-tools pastanaga-menu"
        style={{
          left: `${this.props.componentIndex * 100}%`,
        }}
      >
        <header className="header">
          <h2>Víctor Fernández de Alba</h2>
          <a href="#">
            <Icon name={logoutSVG} size="36px" />
          </a>
        </header>
        <div className="avatar">
          <img src={avatar} />
        </div>
        <div className="stats">
          {/* This should be a Component by itself*/}
          <ul>
            <li>
              <span>126</span>
              <span>Items Created</span>
            </li>
            <li>
              <span>43</span>
              <span>Uploads</span>
            </li>
            <li>
              <span>13</span>
              <span>Reviews</span>
            </li>
          </ul>
        </div>
        <div className="pastanaga-menu-list">
          {/* This (probably also) should be a Component by itself*/}
          <ul>
            <li>
              <button onClick={() => this.push('Profile')}>
                Profile<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
            <li>
              <button>
                Preferences<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
            <li>
              <button>
                Site Setup<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonalTools;
