import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../Components/Navbar';

import { autoLogin } from '../store/actions/actionsAuth';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  React.useEffect(() => dispatch(autoLogin()), [dispatch]);
  return <Navbar authenticated={authenticated} />;
};

export default NavbarContainer;
