import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...PrivateRouteOtherProperty }) {
    return (
        <Route {...PrivateRouteOtherProperty} render={props => {
            console.log(localStorage.getItem('user'))
            if (!localStorage.getItem('user')) {                
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };