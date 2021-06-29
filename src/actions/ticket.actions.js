import { ticketConstants } from "../constants";
import { ticketService } from "../services";
import { alertActions } from ".";

export const ticketActions = {
  fetchState,//estado inicial
  fetchStateCerrarTicket,
  tickets_abiertos,
  tickets_list,
  cambiar_patente,
  ingresar_patente,  
  sacar_patente,
  pagar,
};
function fetchState(){
  return {type: 'FETCH_STATE'}
}
function fetchStateCerrarTicket(){
  return {type: 'FETCH_STATE_CERRAR_TICKET'}
}
function tickets_abiertos(empresa_id) {
  return (dispatch) => {
    dispatch(request());
    ticketService.tickets_abiertos(empresa_id).then(
      (tickets) => {
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
  function failure(error, tickets) {
    return { type: ticketConstants.TICKETSABIERTOS_FAILURE, error, tickets };
  }
}

function tickets_list(empresa_id, user_id) {
  return (dispatch) => {
    dispatch(request());
    ticketService.tickets_list(empresa_id, user_id).then(
      (tickets) => {
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
function cambiar_patente(empresa_id, patente, ticket_id) {
  return (dispatch) => {
    dispatch(request());
    ticketService.cambiar_patente(empresa_id, patente, ticket_id).then(
      (tickets) => {
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
function ingresar_patente(empresa_id, patente, username) {
  return (dispatch) => {
    dispatch(request());
    ticketService.ingresar_patente(empresa_id, patente, username).then(
      (tickets) => {
        dispatch(success(tickets));
        dispatch(alertActions.success("Patente Ingresada Correctamente"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.INGRESAR_PATENTE_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.INGRESAR_PATENTE_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.INGRESAR_PATENTE_FAILURE, error };
  }
}
function sacar_patente(empresa_id, patente) {
  return (dispatch) => {
    dispatch(request());
    ticketService.sacar_patente(empresa_id, patente).then(
      (tickets) => {
        dispatch(success(tickets));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.SACAR_PATENTE_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.SACAR_PATENTE_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.SACAR_PATENTE_FAILURE, error };
  }
}
function pagar(empresa_id, ticket_id,username,emisor_dte) {
  return (dispatch) => {
    dispatch(request());
    ticketService.pagar(empresa_id, ticket_id,username,emisor_dte).then(
      (tickets) => {
        dispatch(success(tickets));
        dispatch(alertActions.success("Patente Pagada Correctamente"));
        
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: ticketConstants.PAGAR_REQUEST };
  }
  function success(tickets) {
    return { type: ticketConstants.PAGAR_SUCCESS, tickets };
  }
  function failure(error) {
    return { type: ticketConstants.PAGAR_FAILURE, error };
  }
}
