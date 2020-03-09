import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// MUI stuff
import {
  useScrollTrigger,
  AppBar,
  Tooltip,
  Toolbar,
  Button,
  Container
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 60
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const Navbar = (props) => {
  const { authenticated } = props;
  const classes = useStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky" className={classes.root}>
        <Container>
          <Toolbar className={classes.top}>
            {authenticated ? (
              <>
                <div>
                  <Button color="inherit" component={Link} to="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} to="/addpost">
                    Addpost
                  </Button>
                </div>
                <div>
                  <Tooltip title="Logout">
                    <Button color="inherit" component={Link} to="/logout">
                      {authenticated}
                    </Button>
                  </Tooltip>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Button color="inherit" component={Link} to="/">
                    Home
                  </Button>
                </div>
                <div>
                  <Button color="inherit" component={Link} to="/registr">
                    Signup
                  </Button>
                </div>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

Navbar.propTypes = {
  authenticated: PropTypes.string
};

Navbar.defaultProps = {
  authenticated: 'anonim'
};

export default Navbar;
