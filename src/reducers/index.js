import {
  GET_ALL_USERS,
  SET_ERROR,
  SET_LOADING,
} from "./../helpers/constants.js";
const initialState = {
  isLoading: false,

  users: null,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
