import { ApiConfigConstants as config, iniciar_sesion } from "../constants";
import axios from "axios";
export const userService = {
  login,
  logout,
};

function login(username, password) {
  var formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);
  return axios({
    method: "post",
    url: iniciar_sesion(),
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          logout();
          window.location.reload(true);
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        return res.data.user;
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      return Promise.reject(err.response.data);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}



