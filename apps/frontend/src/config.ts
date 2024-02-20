import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.common = {
  clientID: Math.random().toString(36).substring(7),
};
