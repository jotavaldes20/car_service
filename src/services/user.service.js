import { iniciar_sesion } from "../constants";
import axios from "axios";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
export const userService = {
  login,
  logout,
};

function login(username, password) { 
  //console.log(iniciar_sesion(username,password))
  return axios({
    method: "get",
    url: iniciar_sesion(username,password),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          logout();
          window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        return res.data.user;
      }
    })
    .catch((err) => {
      if(err.response){
        //console.log(err.response.data.error_message);
        return Promise.reject(err.response.data.error_message);
      }else{
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
      
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}



