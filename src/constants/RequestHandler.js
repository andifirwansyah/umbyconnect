import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

Axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const apiGet = async (url, config = null) => {
  return Axios.get(url, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPost = (url, data, config = null) => {
  return Axios.post(url, data, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const apiPut = (url, data, config = null) => {
  return Axios.put(url, data, config)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
