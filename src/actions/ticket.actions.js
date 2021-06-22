import { ticketConstants } from "../constants";
import { ticketService } from "../services";
import { alertActions } from ".";
import { history } from "../helpers";

export const ticketActions = {
  tickets_abiertos,
  tickets_list,
  cambiar_patente,
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
  function failure(error,tickets) {
    return { type: ticketConstants.TICKETSABIERTOS_FAILURE, error,tickets };
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
function cambiar_patente(empresa_id,patente,ticket_id) {
  return (dispatch) => {    
    dispatch(request());
    ticketService.cambiar_patente(empresa_id,patente,ticket_id)
    .then(
      tickets => {
        dispatch(success(tickets));      
        dispatch(alertActions.success("Patente Cambiada Exitosamente"));
        window.location.reload();
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.CAMBIAR_PATENTE_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.CAMBIAR_PATENTE_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.CAMBIAR_PATENTE_FAILURE, error };
  }
}
