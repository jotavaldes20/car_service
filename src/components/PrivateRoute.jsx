import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LayoutBase from './LayoutBase';

function PrivateRoute({ component: Component, roles, ...PrivateRouteOtherProperty }) {
    return (
        <Route {...PrivateRouteOtherProperty} render={props => {
            //console.log(localStorage.getItem('user'))
            //Si no existe el item user, retorna al login siempre
            if (!localStorage.getItem('user')) {    

                //Verificar componentes del login (registro y contraseña olvidada) no tienes ruta privada con layoutBase como template
                if(props.location.pathname==("/registro") ||  props.location.pathname==("/contraseñaOlvidada")){
                    return <Component {...props} />
                }    
                // no ha iniciado sesión, así que redirija a la página de inicio de sesión con la URL de retorno
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // Retorna al componenete con el layoutBase encapsulandolo 
            return <LayoutBase><Component {...props} /></LayoutBase>
        }} />
    );
}

export { PrivateRoute };