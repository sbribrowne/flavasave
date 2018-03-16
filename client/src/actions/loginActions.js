import axios from "axios";

export function logout() {
  console.log("User has logged out from client side");
  return axios.get("/logout");
}

export function loginAction(userData) {
  return dispatch => {
    return axios.post("api/login", userData);
  };
}
