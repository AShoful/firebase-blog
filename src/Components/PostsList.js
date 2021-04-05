/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';

export default function PostsList({ item, remove }) {
  const { id, title } = item;
  const handleClickDelete = () => {
    remove(id);
  };

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography
            gutterBottom
            component={Link}
            to={`/post/${id}`}
            variant="subtitle1"
          >
            {title}
          </Typography>
          <CardActions>
            <Grid container justify="space-between">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                component={Link}
                to={`/post/edit/${id}`}
              >
                edit
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={handleClickDelete}
              >
                delete
              </Button>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
      <Divider />
    </Card>
  );
}

PostsList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }),
  remove: PropTypes.func
};

PostsList.defaultProps = {
  item: {
    id: 0,
    title: 'title'
  },
  remove: () => {}
};
