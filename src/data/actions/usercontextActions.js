import { GET_USERCONTEXT } from './usercontextConsts'
import axios from 'axios'

const SERVER = 'http://localhost:4001/usercontext';

export const getUsercontext = () => async dispatch => {

  try {
    const res = await axios.get(`${SERVER}`);
    dispatch({
      type: GET_USERCONTEXT,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }

};