import React, { Component, Fragment } from 'react';
import Icon from './Icon/Icon';
import pastanagaSmall from './pastanaga-small.svg';
import './App.css';
import penSVG from './icons/pen.svg';
import folderSVG from './icons/folder.svg';
import addSVG from './icons/add-document.svg';
import moreSVG from './icons/more.svg';

class App extends Component {
  state = {
    expanded: false,
  };

  handleShrink = () =>
    this.setState((state, props) => ({ expanded: !state.expanded }));

  render() {
    return (
      <Fragment>
        <div className={this.state.expanded ? 'toolbar expanded' : 'toolbar'}>
          <div className="toolbar-body">
            <div className="toolbar-actions">
              <a className="edit" href="#">
                <Icon name={penSVG} size="32px" className="circled" />
              </a>
              <a href="#">
                <Icon name={folderSVG} size="32px" />
              </a>
              <a href="#">
                <Icon name={addSVG} size="32px" />
              </a>
            </div>
            <div className="toolbar-bottom">
              <img src={pastanagaSmall} alt="" />
              <a href="#">
                <Icon name={moreSVG} size="32px" />
              </a>
            </div>
          </div>
          <div className="toolbar-handler">
            <button onClick={this.handleShrink} />
          </div>
        </div>
        <div className="content" />
      </Fragment>
    );
  }
}

export default App;
