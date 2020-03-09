import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import SignForm from '../Components/SingForm';

import { auth } from '../store/actions/actionsAuth';

const SingFormContainer = (props) => {
  return props.authenticated ? <Redirect to="/" /> : <SignForm {...props} />;
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  error: state.auth.error,
  loading: state.auth.loading
});
const mapDispatchToProps = (dispatch) => ({
  auth: (data) => dispatch(auth(data))
});

SingFormContainer.propTypes = {
  authenticated: PropTypes.string
};

SingFormContainer.defaultProps = {
  authenticated: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(SingFormContainer);
