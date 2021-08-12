// import axios from 'axios';
export const BASE_URL = 'https://boiling-dawn-71074.herokuapp.com/api/';
const token = localStorage.getItem('token');

export const getAuthConfig = () => {
  return {
    headers: {
      Authorization: token
    }
  }
}

// axios.interceptors.request.use((config) => {
//   if (config.headers['No-Auth']) {
//     return config;
//   }
//   console.log('accessToken', token)
//
//   if (token) {
//     config.headers.authorization = token;
//   }
//   return config;
// });

// headers: { 'content-type': 'application/json', 'No-Auth': true },