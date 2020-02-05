import axios from 'axios';

export default function api(api, method, data) {
  let url = 'http://localhost:8000/api/'+api;
  return axios({
    url: url,
    method: method,
    data: data
  }).then(function (response) {
    return response
  })
  .catch(function (error) {
    return error.response
  });
}
