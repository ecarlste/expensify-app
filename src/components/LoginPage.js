import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.action';

export const LoginPage = props => {
  return <button onClick={props.startLogin}>Login</button>;
};

const mapDispatchToProps = {
  startLogin
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
