import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../css/tailwind.css';
import '../css/index.css';
import logo from '../assets/logo_light.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    return (
      <div className="header">
        <div id="headerClick" className="flex" onClick={this.goHome}>
          <div>
            Juke Jam
          </div>
          <img className="headerLogo" src={logo} alt="" />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
