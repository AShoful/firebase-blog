/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import TextFields from '../Components/TextFields';
import Error from '../Components/Error';

import { fetchPatchItem, fetchItem } from '../store/actions/actionsPosts';

const EditPostContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error } = useSelector((state) => state.app);
  const post = useSelector((state) => state.posts).filter(
    (post) => post.id === id
  )[0];

  React.useEffect(() => {
    if (!post) {
      dispatch(fetchItem(id));
    }
  }, [post, id, dispatch]);

  if (error) {
    return <Error error={error} />;
  }

  const checkName = localStorage.getItem('name');

  return !checkName ? (
    <Redirect to="/" />
  ) : (
    <TextFields
      handleSubmitFetch={(data, id) => dispatch(fetchPatchItem(data, id))}
      post={post}
      postId={id}
      loading={loading}
    />
  );
};

export default EditPostContainer;
