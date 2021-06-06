import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  register,
};

function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      user => {
        dispatch(success(user));        
        history.push(from);
        dispatch(alertActions.success("Usuario Logeado"));
      },
      (error) => {
        dispatch(failure(error.error_message.toString()));
        dispatch(alertActions.error(error.error_message.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return (dispatch) => {
    userService.logout();
    dispatch(logout());
    dispatch(alertActions.info("Sesion Cerrada"));
    
  }
  function logout() {
    return { type: userConstants.LOGOUT };
  }
 
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));
    userService.register(user)
    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
