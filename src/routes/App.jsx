import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../components/HomePage';
import  LoginPage  from '../components/LoginPage/LoginPage3';
import LayoutBase from '../components/LayoutBase'
//import { RegisterPage } from '../RegisterPage';


const App=()=> {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    
                    <LayoutBase>
                    <PrivateRoute exact path="/" component={HomePage} />{/*Pagina por defecto */}
                    {/*<Route path="/register" component={RegisterPage} /> */}
                    <Redirect from="*" to="/" />
                    </LayoutBase>
                </Switch>
            </Router>
    );
}

export default App;