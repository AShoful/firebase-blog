/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
// eslint-disable-next-line consistent-return
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Tooltip,
  Grid,
  Container,
  TextField,
  CardMedia
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    loading: {
      filter: 'blur(2px)'
    },
    CardMedia: {
      marginBottom: theme.spacing(1),
      objectFit: 'cover'
    }
  };
});

export default function TextFields({
  id,
  handleSubmitFetch,
  postId,
  loading,
  post
}) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [discription, setDiscription] = React.useState('');
  const [image, setImage] = React.useState(null);

  const date = Date.now();
  const author = localStorage.getItem('name');
  const data = { id, title, discription, image, date, author };

  React.useEffect(() => {
    if (post && post.title) {
      setTitle(post.title);
      setDiscription(post.discription);
      setImage(post.image);
    }
  }, [post]);

  const handleImageChange = (input) => {
    const image = input.files[0];
    if (image.size < 200000) {
      const blob = new Blob([image], { type: 'image/jpg' });

      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onload = () => {
        setImage(reader.result);
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    } else {
      global.alert('Размер рисунка не должен превышать 200 кБ');
    }
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  return (
    <Container component="main" maxWidth="md">
      <form
        className={loading ? classes.loading : null}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
              id="title"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="discription"
              label="Discription"
              name="discription"
              multiline
              rows="10"
              onChange={(e) => setDiscription(e.target.value)}
              value={discription}
            />
          </Grid>
          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={() =>
              handleImageChange(document.querySelector('#imageInput'))
            }
          />
          <Container maxWidth="xs">
            {image && (
              <Grid container>
                <CardMedia
                  className={classes.CardMedia}
                  component="img"
                  alt="Contemplative Reptile"
                  image={image}
                  title="Contemplative Reptile"
                />
              </Grid>
            )}
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Tooltip title="Add your foto">
                  <Button
                    fullWidth
                    onClick={handleEditPicture}
                    color="primary"
                    variant="outlined"
                  >
                    {post && post.title ? 'Edit foto' : 'Add foto'}
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.submit}
                  disabled={!title || !discription || !author}
                  onClick={() => handleSubmitFetch(data, postId)}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </form>
    </Container>
  );
}
