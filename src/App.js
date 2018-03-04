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
    menuComponents: [],
  };

  handleShrink = () =>
    this.setState((state, props) => ({ expanded: !state.expanded }));

  closeMenu = (e, selector) =>
    this.setState((state, props) => ({ showMenu: false, menuComponents: [] }));

  loadComponent = type => {
    const { menuComponents } = this.state;
    const nextIndex = menuComponents.length;

    if (
      !this.state.menuComponents.reduce(
        (prev, current) => prev && current.name === `${type}`,
        false,
      )
    ) {
      import(`./${type}.js`).then(Component =>
        this.setState((state, props) => ({
          menuComponents: state.menuComponents.concat({
            name: `${type}`,
            component: (
              <Component.default
                loadComponent={this.loadComponent}
                unloadComponent={this.unloadComponent}
                componentIndex={nextIndex}
                theToolbar={this.theToolbar}
                key={`menucomp-${nextIndex}`}
              />
            ),
          }),
        })),
      );
    }
  };

  unloadComponent = () => {
    this.setState((state, props) => ({
      menuComponents: state.menuComponents.slice(0, -1),
    }));
  };

  showMenu = (e, selector) => {
    // PersonalTools always shows at bottom
    if (selector === 'PersonalTools') {
      this.setState((state, props) => {
        return {
          showMenu: !state.showMenu,
          menuStyle: { bottom: 0 },
        };
      });
    } else {
      const elemOffsetTop = e.target.getBoundingClientRect().top;
      this.setState((state, props) => {
        return {
          showMenu: !state.showMenu,
          menuStyle: { top: `${elemOffsetTop}px` },
        };
      });
    }
    this.loadComponent(selector);
  };

  render() {
    return (
      <Fragment>
        <div
          style={this.state.menuStyle}
          className={
            this.state.showMenu ? 'toolbar-content show' : 'toolbar-content'
          }
          ref={toolbar => {
            this.theToolbar = toolbar;
          }}
        >
          <div
            className="pusher-puller"
            style={{
              left: `-${(this.state.menuComponents.length - 1) * 100}%`,
            }}
          >
            {this.state.menuComponents.map(component => (
              <Fragment>{component.component}</Fragment>
            ))}
          </div>
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
                onClick={e => this.showMenu(e, 'PersonalTools')}
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
