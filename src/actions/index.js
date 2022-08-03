import {
  GET_ALL_USERS,
  SET_ERROR,
  SET_LOADING,
  API_LINK,
} from "./../helpers/constants";
import axios from "axios";
export const getAllUsers = () => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios
    .get(API_LINK)
    .then((response) => {
      return response.data;
    })
    .then(
      (data) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: data,
        });
      },
      (error) => {
        console.log("err");
        dispatch({ type: SET_ERROR, payload: error.message });
      }
    );
  dispatch({ type: SET_LOADING, payload: false });
};
