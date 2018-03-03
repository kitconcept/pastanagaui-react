import React, { Component, Fragment } from 'react';
import Icon from './Icon/Icon';
import pastanagaSmall from './pastanaga-small.svg';
import pastanagalogo from './pastanaga.svg';
import './App.css';
import penSVG from './icons/pen.svg';
import folderSVG from './icons/folder.svg';
import addSVG from './icons/add-document.svg';
import moreSVG from './icons/more.svg';
import userSVG from './icons/user.svg';

class App extends Component {
  state = {
    expanded: false,
    showMoreMenu: false,
    menuOffsetTop: 0,
  };

  handleShrink = () =>
    this.setState((state, props) => ({ expanded: !state.expanded }));

  showMoreMenu = e => {
    const elemOffsetTop = e.target.getBoundingClientRect().top;
    this.setState((state, props) => {
      return {
        showMoreMenu: !state.showMoreMenu,
        menuOffsetTop: `${elemOffsetTop}px`,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ top: this.state.menuOffsetTop }}
          className={
            this.state.showMoreMenu ? 'toolbar-content show' : 'toolbar-content'
          }
        >
          The toolbar content
        </div>
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
              <button className="more" onClick={this.showMoreMenu}>
                <Icon name={moreSVG} size="32px" />
              </button>
            </div>
            <div className="toolbar-bottom">
              <img className="minipastanaga" src={pastanagaSmall} alt="" />
              <a className="user" href="#">
                <Icon name={userSVG} size="32px" />
              </a>
              <div className="divider" />
              <div className="pastanagalogo">
                <img src={pastanagalogo} alt="" />
              </div>
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
