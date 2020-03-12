import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TextFields from '../Components/TextFields';

import { fetchPatchItem, fetchItem } from '../store/actions/actionsPosts';

const EditPostContainer = ({
  getItem,
  fetchPatchItem,
  post,
  postId,
  loading
}) => {
  React.useEffect(() => {
    if (!post.title) {
      getItem(postId);
    }
  }, [getItem, post, postId]);

  const checkName = localStorage.getItem('name');

  return !checkName ? (
    <Redirect to="/" />
  ) : (
    <TextFields
      handleSubmitFetch={fetchPatchItem}
      post={post}
      postId={postId}
      loading={loading}
    />
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    postId: match.params.id,
    post: state.posts.items.filter((post) => post.id === match.params.id)[0],
    loading: state.posts.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPatchItem: (data, id) => dispatch(fetchPatchItem(data, id)),
    getItem: (id) => dispatch(fetchItem(id))
  };
};

EditPostContainer.propTypes = {
  fetchPatchItem: PropTypes.func,
  getItem: PropTypes.func,
  postId: PropTypes.string,
  loading: PropTypes.bool,
  post: PropTypes.shape({
    title: PropTypes.string,
    discription: PropTypes.string,
    image: PropTypes.string
  })
};

EditPostContainer.defaultProps = {
  fetchPatchItem: () => {},
  getItem: () => {},
  postId: '',
  loading: false,
  post: {
    title: '',
    discription: '',
    image: null
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
