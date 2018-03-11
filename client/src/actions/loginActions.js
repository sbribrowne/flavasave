import axios from "axios";

export function loginAction(userData) {
  return dispatch => {
    return axios.post("api/login", userData);
  };
}
