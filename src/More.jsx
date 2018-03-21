import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon/Icon';
import rightArrowSVG from './icons/right-key.svg';
import userSVG from './icons/user.svg';

class More extends Component {
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
        className="menu-more pastanaga-menu"
        style={{
          left: `${this.props.componentIndex * 100}%`,
          width: '100vw',
        }}
      >
        <header>
          <h2>Title of the content</h2>
          <button
            className="user"
            onClick={() => this.push('PersonalTools')}
            tabIndex={0}
          >
            <Icon name={userSVG} size="36px" />
          </button>
        </header>
        <div className="pastanaga-menu-list">
          <ul>
            <li>
              <span className="pastanaga-menu-field" />
              <button onClick={() => this.push('Profile')}>
                Profile<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
            <li>
              <button>
                Grant Access<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
            <li>
              <button>
                Portlets<Icon name={rightArrowSVG} size="24px" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default More;
