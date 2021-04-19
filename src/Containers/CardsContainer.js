/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import Card from '../Components/Card';
import Error from '../Components/Error';
import Sceleton from '../Components/Sceleton';

import { fetchItems, fetchRemoveItem } from '../store/actions/actionsPosts';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { loading, error } = useSelector((state) => state.app);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container component="main">
      {!loading ? (
        posts.map((post) => (
          // check
          <Card
            key={post.id || '1'}
            item={post}
            remove={(id) => dispatch(fetchRemoveItem(id))}
          />
        ))
      ) : (
        <Sceleton />
      )}
    </Container>
  );
};

export default CardsContainer;
