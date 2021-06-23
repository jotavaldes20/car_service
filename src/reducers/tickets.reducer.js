import { ticketConstants } from "../constants";

export function tickets_abiertos(state = {}, action) {
  switch (action.type) {
    case ticketConstants.TICKETSABIERTOS_REQUEST:
      return {
        loading: true,
      };
    case ticketConstants.TICKETSABIERTOS_SUCCESS:
      return {
        items: action.tickets,
      };
    case ticketConstants.TICKETSABIERTOS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
export function tickets_list(state = {}, action) {
  switch (action.type) {
case ticketConstants.TICKETSLIST_REQUEST:
  return {
    loading: true,
  };
case ticketConstants.TICKETSLIST_SUCCESS:
  return {
    items: action.tickets,
  };
case ticketConstants.TICKETSLIST_FAILURE:
  return {
    error: action.error,
  };

default:
  return state;
}
}
export function cambiar_patente(state = {}, action) {
  switch (action.type) {
    case ticketConstants.CAMBIAR_PATENTE_REQUEST:
      return {
        loading: true,
      };
    case ticketConstants.CAMBIAR_PATENTE_SUCCESS:
      return {};
    case ticketConstants.CAMBIAR_PATENTE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
const initialState = {
  loading: false,
  success: false,
}
export function ingresar_patente(state=initialState,action){
  switch (action.type) {
    case ticketConstants.INGRESAR_PATENTE_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case ticketConstants.INGRESAR_PATENTE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ticketConstants.INGRESAR_PATENTE_FAILURE:
      return {
        error: action.error,
      };
    case 'FETCH_STATE':
        return {
            ...state, 
        }
    default:
      return state;
  }
}