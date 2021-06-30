import React, { useEffect, useState, Suspense, lazy } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
//useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, 
//useDispatch devuelve una función que podremos emplear para enviar acciones a la store de Redux.
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/PrivateRoute';
//import { RegisterPage } from '../RegisterPage';
import ErrorIcon from '@material-ui/icons/Error'
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
//import HomePage from '../containers/HomePage';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
//Mensajes
import Mensajes from '../components/Mensajes/Mensajes'
import Loader from '../components/Loader/Loader';
const HomePage = lazy(() => import('../containers/HomePage'));
const NewTicket = lazy(() => import('../components/Ticket/NewTicket'))
const NotFound = lazy(() => import('../components/NotFound/NotFound'))
const TicketsAbiertos = lazy(() => import('../components/Ticket/TicketsAbiertos'))
const TicketsList = lazy(() => import('../components/Ticket/TicketList'))

const App = () => {
    const alert = useSelector(state => state.alert);
    const [tipoMensaje, setTipoMensaje] = useState("success")
    const [message, setMessage] = useState("prueba de mensaje in component")
    const [openMensaje, setOpenMensaje] = useState(false)
    const dispatch = useDispatch();
    const notificacion_error = (msg) => {
        toast.error(<div><ErrorIcon /> {msg}</div>, {
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
        toast.success(<div><SuccessIcon /> {msg}</div>, {
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
        toast.info(<div><InfoIcon /> {msg}</div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const notificacion_warning = (msg) => {
        toast.info(<div><WarningIcon /> {msg}</div>, {
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
            if (alert.type === "alert-danger") {
                notificacion_error(alert.message)
                /*setMessage("prueba de error")
                setTipoMensaje("success")
                setOpenMensaje(true)*/
            }
            if (alert.type === "alert-success") {
                notificacion_success(alert.message)
            }
            if (alert.type === "alert-info") {
                notificacion_info(alert.message)
            }
        }
    });
    useEffect(() => {
        history.listen((location, action) => {
            // Limpiar alertas al cambiar de path
            dispatch(alertActions.clear());

        });
    }, []);


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
            <Mensajes message={message} variant={tipoMensaje} openMensaje={openMensaje} />

            <Router history={history}>
                <Suspense fallback={
                    <div>
                        <Loader />
                    </div>
                }>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />{/*Pagina por defecto */}
                        <PrivateRoute exact path="/HomePage" component={HomePage} />{/*Pagina por defecto */}
                        <PrivateRoute exact path="/TicketsAbiertos" component={TicketsAbiertos} />{/*Lista de ticket Abiertos */}
                        <PrivateRoute exact path="/TicketList" component={TicketsList} />{/*Lista de ticket LIST */}
                        <PrivateRoute exact path="/NewTicket" component={NewTicket} />{/* New ticket and sacar ticket */}
                        {/*<Route path="/register" component={RegisterPage} /> */}
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>

        </BrowserRouter>
    );
}

export default App;