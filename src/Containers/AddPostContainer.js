import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextFields from '../Components/TextFields';

import { fetchPostItem } from '../store/actions/actionsPosts';

const AddPostContainer = ({ fetchPostItem, loading }) => {
  return <TextFields handleSubmitFetch={fetchPostItem} loading={loading} />;
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostItem: (data) => dispatch(fetchPostItem(data))
});

AddPostContainer.propTypes = {
  fetchPostItem: PropTypes.func,
  loading: PropTypes.bool
};

AddPostContainer.defaultProps = {
  fetchPostItem: () => {},
  loading: false
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer);
