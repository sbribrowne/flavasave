import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt from "jsonwebtoken";
import { SET_CURRENT_USER } from "./types";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function loginAction(userData) {
  return dispatch => {
    return axios.post("api/login", userData).then(res => {
      const token = res.data.token; // this is user object
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
}
