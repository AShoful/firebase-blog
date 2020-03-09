import axios from '../axios';

export default {
  get: () => axios.get(`/quizes.json`),
  getItem: (id) => axios.get(`/quizes/${id}.json`),
  remove: (id) => axios.delete(`/quizes/${id}.json`),
  post: (data) => axios.post('/quizes.json', data),
  patch: (data, id) => axios.patch(`/quizes/${id}.json`, data)
};
