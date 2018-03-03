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
    menuStyle: {},
  };

  handleShrink = () =>
    this.setState((state, props) => ({ expanded: !state.expanded }));

  showMenu = (e, selector) => {
    if (selector === 'personal') {
      this.setState((state, props) => {
        return {
          showMoreMenu: !state.showMoreMenu,
          menuStyle: { bottom: 0 },
        };
      });
    } else {
      const elemOffsetTop = e.target.getBoundingClientRect().top;
      this.setState((state, props) => {
        return {
          showMoreMenu: !state.showMoreMenu,
          menuStyle: { top: `${elemOffsetTop}px` },
        };
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div
          style={this.state.menuStyle}
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
              <button className="more" onClick={this.showMenu}>
                <Icon name={moreSVG} size="32px" />
              </button>
            </div>
            <div className="toolbar-bottom">
              <img className="minipastanaga" src={pastanagaSmall} alt="" />
              <button
                className="user"
                onClick={e => this.showMenu(e, 'personal')}
              >
                <Icon name={userSVG} size="32px" />
              </button>
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
