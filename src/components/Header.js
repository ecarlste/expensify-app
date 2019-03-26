import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth.action';

export const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Exspensify</h1>
        </Link>
        <button className="button button--link" onClick={props.startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = {
  startLogout
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
