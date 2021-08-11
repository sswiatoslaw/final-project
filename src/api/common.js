import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (config.headers['No-Auth']) {
    return config;
  }
  const accessToken = localStorage.getItem('token');
  console.log('accessToken', accessToken)

  if (accessToken) {
    config.headers.authorization = accessToken;
  }
  return config;
});

// headers: { 'content-type': 'application/json', 'No-Auth': true },