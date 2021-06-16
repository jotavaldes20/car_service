import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MiAlerta from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
function AlertaSuccess(props) {
    return <MiAlerta elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(theme => ({
    alerta: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));
const Mensajes = (props) => {
    const { message, variant,openMensaje }=props;
    const classes = useStyles();
    const [openAlerta, setOpenAlerta] = useState(Boolean(variant)); 
    const abrirAlerta = () => {
        setOpenAlerta(!openAlerta);
    };
    const cerrarAlerta = () => {
        setOpenAlerta(false);
    };
    const alert = useSelector(state => state.alert); 
    return ( 
        openMensaje?      
        <div>
            {alert.message && console.log("alerta: ",alert)
            
            }
             {/*<Button variant="contained" color="secondary" size="small"
                    style={{ margin: 6 }} onClick={abrirAlerta}>
                    Sacar Ticket
                </Button>*/}
                <div className={classes.alerta}>      
                <Snackbar open={openAlerta} elevation={6} variant="filled" autoHideDuration={6000} onClose={cerrarAlerta} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                    <AlertaSuccess onClose={cerrarAlerta} severity={variant}>
                        <p>{message}</p>
                    </AlertaSuccess>
                </Snackbar>
            </div >
            
        </div>
        :""
    )
}

export default Mensajes
