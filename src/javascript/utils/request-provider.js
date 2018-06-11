import SessionProvider from './session-provider';
import axios from 'axios';

function request(method, url, data) {
  const authToken = SessionProvider.getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
  };
  if (authToken) {
    _.extend(headers, { 'x-auth-token': authToken });
  }
  return axios({
    method,
    url,
    data,
    headers,
  });
}

export default class RequestProvider {
  static fetch(url, data) {
    return request('get', url, data);
  }

  static save(url, data) {
    return request('post', url, data);
  }

  static update(url, data) {
    return request('put', url, data);
  }

  static delete(url, data) {
    return request('delete', url, data);
  }
}
