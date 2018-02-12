import axios from 'axios';

import {
  FETCH_INSTAS
} from './types'

const INSTA_ROOT_URL = "https://api.instagram.com/v1/users/22107223/media/recent/?access_token=22107223.f0d8c10.b8b0481c066b4e22ab3c371e08b00bea"

export const fetchInstas = () => {
  return dispatch => {
    axios.get(INSTA_ROOT_URL)
    .then(data => {
      dispatch({ type: FETCH_INSTAS, payload: data.data });
    })
    .catch(error => {
      console.log(error);
    });
  };
};
