import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from '../Components/Navbar';

import { autoLogin } from '../store/actions/actionsAuth';

const NavbarContainer = ({ authenticated, autoLogin }) => {
  React.useEffect(() => autoLogin(), [autoLogin]);
  return <Navbar authenticated={authenticated} />;
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});
const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => dispatch(autoLogin())
});

NavbarContainer.propTypes = {
  authenticated: PropTypes.string,
  autoLogin: PropTypes.func
};

NavbarContainer.defaultProps = {
  authenticated: '',
  autoLogin: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
