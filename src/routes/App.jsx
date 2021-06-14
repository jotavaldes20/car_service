import React, { useEffect, useState, Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
//useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, 
//useDispatch devuelve una función que podremos emplear para enviar acciones a la store de Redux.
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import HomePage from '../containers/HomePage';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import LayoutBase from '../components/LayoutBase'
//import { RegisterPage } from '../RegisterPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
//Mensajes
import Mensajes from '../components/Mensajes'
import TicketList from '../containers/TicketList';
import NotFound from '../components/NotFound/NotFound';

const App = () => {
    const alert = useSelector(state => state.alert); 
    const [tipoMensaje,setTipoMensaje]=useState("")
    const [message,setMessage]=useState("")
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
    });
    useEffect(() => {      
        history.listen((location, action) => {            
            // Limpiar alertas al cambiar de path
            dispatch(alertActions.clear());
        });     
    },[]);
    
   
    return (
        <BrowserRouter>
            <CssBaseline />
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
            <Mensajes message={message} variant={tipoMensaje} />
            <Router history={history}>
                <Switch>                    
                        
                        <PrivateRoute exact path="/" component={HomePage} />{/*Pagina por defecto */}
                        <PrivateRoute exact path="/HomePage" component={HomePage} />{/*Pagina por defecto */}
                        <PrivateRoute exact path="/TicketList" component={TicketList} />{/*Lista de ticket Abiertos */}
                        {/*<Route path="/register" component={RegisterPage} /> */}
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute component={NotFound} /> 
                        
                          
            
                   
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default App;