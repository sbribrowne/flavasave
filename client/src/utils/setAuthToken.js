import axios from "axios";

export default function setAuthToken(token) {
  if (token) {
    // if provided token, add auth header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // else delete the header
    delete axios.defaults.headers.common["Authorization"];
  }
}
