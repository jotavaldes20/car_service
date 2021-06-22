import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { tickets_abiertos,tickets_list,cambiar_patente } from './tickets.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    tickets_abiertos,
    tickets_list,
    cambiar_patente,
    alert
});

export default rootReducer;