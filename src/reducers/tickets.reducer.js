import { ticketConstants } from "../constants";

export function tickets(state = {}, action) {
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
