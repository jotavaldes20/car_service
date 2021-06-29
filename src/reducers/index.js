import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { tickets_abiertos,tickets_list,cambiar_patente,ingresar_patente,sacar_patente,pagar } from './tickets.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    alert,
    tickets_abiertos,
    tickets_list,
    cambiar_patente,
    ingresar_patente,
    sacar_patente,
    pagar,   
});

export default rootReducer;