/* eslint-disable consistent-return */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Divider,
  Tooltip,
  Typography
} from '@material-ui/core';

import { noImage } from '../image/no-image';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '5px auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  area: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%'
  },
  CardMedia: {
    width: 180,
    marginBottom: 5,
    height: 150,
    objectFit: 'cover',
    borderRadius: 10
  }
});

export default function ImgMediaCard({ item, remove }) {
  const classes = useStyles();
  const [isAll, setIsAll] = useState(false);

  const { id, title, discription, image = noImage, author, date } = item;
  const name = localStorage.getItem('name');
  const handleClickDelete = () => {
    const checkName = localStorage.getItem('name');
    if (!checkName) {
      return global.alert('Время авторизации истекло');
    }
    remove(id);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.CardMedia}
          component="img"
          alt="Contemplative Reptile"
          image={image}
          title="Contemplative Reptile"
        />
        <div className={classes.area}>
          <CardActionArea onClick={() => setIsAll(!isAll)}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="h4">
                {title}
              </Typography>
              <Typography gutterBottom variant="caption" component="h6">
                {new Date(date).toLocaleDateString().split(' ')[0]}
              </Typography>
              <Tooltip title={!isAll ? 'See more' : 'collapse'}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {isAll || discription.length < 100
                    ? discription
                    : `${discription.slice(0, 100)}...`}
                </Typography>
              </Tooltip>
            </CardContent>
          </CardActionArea>
          {name === author && (
            <CardActions className={classes.container}>
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
            </CardActions>
          )}
        </div>
        <Divider />
      </Card>
    </Container>
  );
}

ImgMediaCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    discription: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.number
  }),
  remove: PropTypes.func
};

ImgMediaCard.defaultProps = {
  item: {
    id: '',
    title: 'title',
    discription: 'discription',
    author: '',
    date: 0
  },
  remove: () => {}
};
