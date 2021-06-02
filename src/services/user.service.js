import { ApiConfigConstants as config, iniciar_sesion } from "../constants";
import axios from "axios";
export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  //implementar AXIOS
  /*var body = {
        username: username,
        password: password
    }
    
    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('user', JSON.stringify(user));

            return user;
        });*/
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
        console.log(res);
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  /*const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        //body: formData
    };

    return fetch(iniciar_sesion(), requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('user', JSON.stringify(user));

            return user;
        });*/
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status !== 200) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.error_message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
