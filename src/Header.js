import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className="bz-navbar">
        <div className="uk-container">
          <nav className="uk-navbar-transparent uk-navbar-container uk-margin" uk-navbar="true">
            <div className="uk-navbar-left">
              <span className="uk-navbar-item uk-logo bz-logo">Bazaar Market</span>
            </div>
            <div className="uk-navbar-right">
              <div className="uk-navbar-item">
                <a className="uk-button uk-button-text bz-github" href="https://github.com/willi123yao/BazaarMart">Github</a>
              </div>
              <div className="uk-navbar-item">
                <a className="uk-button uk-button-text bz-github" href="https://github.com/willi123yao/BazaarMart/issues">Bugs?</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;