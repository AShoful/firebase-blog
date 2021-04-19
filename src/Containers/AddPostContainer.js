import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';
import Error from '../Components/Error';

import { fetchPostItem } from '../store/actions/actionsPosts';

const AddPostContainer = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.app);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <TextFields
      handleSubmitFetch={(data) => dispatch(fetchPostItem(data))}
      loading={loading}
    />
  );
};

export default AddPostContainer;
