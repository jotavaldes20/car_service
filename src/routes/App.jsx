import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
//useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, 
//useDispatch devuelve una función que podremos emplear para enviar acciones a la store de Redux.
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage/LoginPage3';
import LayoutBase from '../components/LayoutBase'
//import { RegisterPage } from '../RegisterPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    const alert = useSelector(state => state.alert); 
    const dispatch = useDispatch();
    const notificacion_error = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const notificacion_success = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const notificacion_info = (msg) => {
        toast.info(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    useEffect(() => {
        if (alert.message) {
            if (alert.type==="alert-danger") {
                notificacion_error(alert.message)
            }
            if (alert.type==="alert-success") {
                notificacion_success(alert.message)
            }
            if(alert.type==="alert-info"){
                notificacion_info(alert.message)
            }
        }
        history.listen((location, action) => {            
            // Limpiar alertas al cambiar de path
            dispatch(alertActions.clear());
        });
    });
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
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
        </div>
    );
}

export default App;