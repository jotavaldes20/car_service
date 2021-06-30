import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
};

function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password)
    .then(
      user => {
        dispatch(success(user));  
        //console.log("from: ",from)      
        history.push(from);
        dispatch(alertActions.success("Usuario Logeado"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
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
      if(localStorage.getItem('user')){
      dispatch(alertActions.info("Sesion Cerrada"));
      userService.logout();      
      dispatch(logout());     
    }
  }
  function logout() {
    return { type: userConstants.LOGOUT };
  }
 
}
