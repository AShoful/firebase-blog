import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignForm from '../Components/SingForm';

import { auth } from '../store/actions/actionsAuth';

const SingFormContainer = (props) => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const { error, loading } = useSelector((state) => state.app);
  const authorization = (data) => dispatch(auth(data));
  const newProps = { ...props, error, loading, authorization };
  return authenticated ? <Redirect to="/" /> : <SignForm {...newProps} />;
};

export default SingFormContainer;
