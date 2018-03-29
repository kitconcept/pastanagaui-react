import React, { Component, Fragment } from 'react';
import { Icon, Display, Workflow } from './components';
import './themes/pastanaga/Select/default.css';
import checkSVG from './icons/check.svg';

class Content extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <div>
          <Workflow />
          <Display />
          <div> BLABLA </div>
        </div>
      </div>
    );
  }
}

export default Content;
