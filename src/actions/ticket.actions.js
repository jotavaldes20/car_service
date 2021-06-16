import { ticketConstants } from "../constants";
import { ticketService } from "../services";
import { alertActions } from ".";
import { history } from "../helpers";

export const ticketActions = {
  tickets_abiertos,
  tickets_list,
};

function tickets_abiertos(empresa_id) {
  return (dispatch) => {    
    dispatch(request());
    ticketService.tickets_abiertos(empresa_id)
    .then(
      tickets => {
        dispatch(success(tickets));      
        dispatch(alertActions.success("Tickets Cargados Exitosamente"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.TICKETSABIERTOS_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.TICKETSABIERTOS_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.TICKETSABIERTOS_FAILURE, error };
  }
}

function tickets_list(empresa_id,user_id) {
  return (dispatch) => {    
    dispatch(request());
    ticketService.tickets_list(empresa_id,user_id)
    .then(
      tickets => {
        dispatch(success(tickets));      
        dispatch(alertActions.success("Tickets Cargados Exitosamente"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.TICKETSLIST_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.TICKETSLIST_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.TICKETSLIST_FAILURE, error };
  }
}
