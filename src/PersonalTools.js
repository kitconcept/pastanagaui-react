import React, { Component } from 'react';
import Icon from './Icon/Icon';
import logoutSVG from './icons/log-out.svg';
import rightArrowSVG from './icons/right-key.svg';
import avatar from './avatar.jpg';
import './PersonalTools.css';

class PersonalTools extends Component {
  render() {
    return (
      <div className="personal-tools">
        <header className="header">
          <h2>Víctor Fernández de Alba</h2>
          <a href="#">
            <Icon name={logoutSVG} size="32px" />
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
        <div className="links">
          {/* This (probably also) should be a Component by itself*/}
          <ul>
            <li>
              <button>
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
