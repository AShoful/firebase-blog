import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextFields from '../Components/TextFields';

import { fetchPostItem } from '../store/actions/actionsPosts';

const AddPostContainer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  return (
    <TextFields
      handleSubmitFetch={(data) => dispatch(fetchPostItem(data))}
      loading={loading}
    />
  );
};

export default AddPostContainer;
