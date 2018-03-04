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
    showMenu: false,
    menuStyle: {},
    menuComponent: <span />,
  };

  handleShrink = () =>
    this.setState((state, props) => ({ expanded: !state.expanded }));

  closeMenu = (e, selector) =>
    this.setState((state, props) => ({ showMenu: true }));

  loadPersonalTools = () => {
    import(`./PersonalTools.js`).then(Component =>
      this.setState((state, props) => ({
        menuComponent: <Component.default />,
      })),
    );
  };

  showMenu = (e, selector) => {
    if (selector === 'personal') {
      this.setState((state, props) => {
        return {
          showMenu: !state.showMenu,
          menuStyle: { bottom: 0 },
        };
      });
      this.loadPersonalTools();
    } else {
      const elemOffsetTop = e.target.getBoundingClientRect().top;
      this.setState((state, props) => {
        return {
          showMenu: !state.showMenu,
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
            this.state.showMenu ? 'toolbar-content show' : 'toolbar-content'
          }
        >
          {this.state.menuComponent}
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
              <button
                className="more"
                onClick={this.showMenu}
                onBlur={this.closeMenu}
                tabIndex={0}
              >
                <Icon name={moreSVG} size="32px" />
              </button>
            </div>
            <div className="toolbar-bottom">
              <img className="minipastanaga" src={pastanagaSmall} alt="" />
              <button
                className="user"
                onClick={e => this.showMenu(e, 'personal')}
                onBlur={this.closeMenu}
                tabIndex={0}
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
