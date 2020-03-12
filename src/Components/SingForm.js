import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validator from 'email-validator';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()}.`}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  loading: {
    filter: 'blur(2px)'
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  error: {
    textAlign: 'center',
    textDecoration: 'underline'
  }
}));

export default function SignForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touch, setTouch] = useState(false);

  const classes = useStyles();
  const { name, linkName, link, isLogin, auth, error, loading } = props;
  const handleSubmit = (email, password, isLogin, e) => {
    e.preventDefault();
    auth({ email, password, isLogin });
    setEmail('');
    setPassword('');
    setTouch(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={loading ? classes.loading : null}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {name}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={!!email && !validator.validate(email)}
                helperText={
                  !!email && !validator.validate(email)
                    ? 'Введите корректно адрес электронной почты'
                    : null
                }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setTouch(true);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!isLogin && !!password && password.length < 6}
                helperText={
                  !isLogin && password.length < 6 && !!password
                    ? 'Пароль должен быть не меньше 6 символов'
                    : null
                }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setTouch(true);
                }}
              />
            </Grid>
          </Grid>
          {error && !touch ? (
            <Box p={1} className={classes.error} color="secondary.main">
              {isLogin
                ? 'Пароль или логин неверны'
                : 'Аккаунт с таким адресом электронной почты уже существует'}
            </Box>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={
              !validator.validate(email) ||
              !password ||
              (!isLogin && password.length < 6)
            }
            className={classes.submit}
            onClick={(e) => handleSubmit(email, password, isLogin, e)}
          >
            {name}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={link} variant="body2">
                {linkName}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box p={3}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignForm.propTypes = {
  name: PropTypes.string,
  linkName: PropTypes.string,
  link: PropTypes.string,
  isLogin: PropTypes.bool,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  auth: PropTypes.func
};

SignForm.defaultProps = {
  name: 'name',
  linkName: 'linkName',
  link: '/',
  isLogin: false,
  error: false,
  loading: false,
  auth: () => {}
};
