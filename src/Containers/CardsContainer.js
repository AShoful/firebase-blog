/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import Card from '../Components/Card';
import Sceleton from '../Components/Sceleton';

import { fetchItems, fetchRemoveItem } from '../store/actions/actionsPosts';

const CardsContainer = (props) => {
  const { fetchPosts, cards, isLoading, fetchRemove } = props;
  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container component="main">
      {!isLoading ? (
        cards.map((item) => (
          // check
          <Card key={item.id || 1} item={item} remove={fetchRemove} />
        ))
      ) : (
        <Sceleton />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cards: state.posts.items,
  isLoading: state.posts.loading
});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchItems()),
  fetchRemove: (id) => dispatch(fetchRemoveItem(id))
});

CardsContainer.propTypes = {
  fetchPosts: PropTypes.func,
  cards: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchRemove: PropTypes.func
};

CardsContainer.defaultProps = {
  fetchPosts: () => {},
  cards: [],
  isLoading: false,
  fetchRemove: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
