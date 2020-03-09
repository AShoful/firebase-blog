import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../store/actions/actionsAuth';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

Logout.propTypes = {
  logout: PropTypes.func
};

Logout.defaultProps = {
  logout: () => {}
};

export default connect(null, mapDispatchToProps)(Logout);
