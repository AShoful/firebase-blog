/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  CardMedia: {
    width: '95%',
    marginTop: theme.spacing(1),
    objectFit: 'contain',
    borderRadius: '50%',
    border: '3px solid rgba(0,0,0,0.2)',
    marginBottom: theme.spacing(4)
  },
  name: {
    color: theme.palette.primary.main,
    fontSize: 36,
    marginBottom: 0
  },
  bio: {
    fontSize: 16
  },
  button: {
    fontSize: 12,
    margin: theme.spacing(1),
    fontWeight: 600
  }
}));

export default function CardPost({ post }) {
  const classes = useStyles();

  console.log(post);
  const { title, body, comments } = post;
  console.log(comments);
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <CardContent>
            <Typography
              className={classes.name}
              gutterBottom
              variant="subtitle1"
              component="h4"
            >
              {title}
            </Typography>
            <Typography
              className={classes.bio}
              variant="subtitle2"
              color="textSecondary"
              component="p"
            >
              {body}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Divider />
    </Card>
  );
}

CardPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.array,
    body: PropTypes.string,
    id: PropTypes.number
  })
};

CardPost.defaultProps = {
  post: {
    title: '',
    body: '',
    comments: [],
    id: 0
  }
};
