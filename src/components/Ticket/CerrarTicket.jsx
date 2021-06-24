import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types'; //para documentar Componente CerrarTicket
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from "@material-ui/core/DialogContent";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import InputMask from 'react-text-mask';
import { ticketActions } from "../../actions";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const ColorButton = withStyles((theme) => ({
    root: {
        color: "#fffff",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[900],
        },
    },
}))(Button);

const CerrarTicket = (props) => {
    const [open, setOpen] = useState(false);
    const [montoPagar, setMontoPagar] = useState(0);
    const classes = useStyles();
    //const [ticket_id, setTicket_id] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const datos_tickets = useSelector(state => state.sacar_patente);
    const { empresa_id,username,emisor_dte } = user;
    const { patente } = props
    useEffect(() => {
        dispatch(ticketActions.fetchStateCerrarTicket())
    }, []);

    const handleOpen = (e) => {
        e.preventDefault();
        if (!patente == "") {
            dispatch(ticketActions.sacar_patente(empresa_id, patente))
            setOpen(!open);
        }
    };

    const handleClose = () => {
        setOpen(!open);
        //localStorage.removeItem("sacar_patente");
    };

    const pagar=(ticket_id)=>{
        alert(ticket_id)
        dispatch(ticketActions.pagar(empresa_id, ticket_id,username,emisor_dte))
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >

                <Grid item xs={12}>

                    <ColorButton variant="contained" color="primary" size="small" fullWidth
                        style={{ marginLeft: 2 }} onClick={handleOpen} >
                        Cerrar Ticket
                    </ColorButton>
                    {datos_tickets.success &&
                        <Paper className={classes.paper}>
                            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

                                <DialogTitle id="simple-dialog-title">Monto pagar patente {patente}</DialogTitle>
                                <DialogContent >
                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                        
                                        <InputLabel htmlFor="nueva-patente">Monto Pagar</InputLabel>
                                        <OutlinedInput
                                            id="patente"
                                            label="Nueva Patente"
                                            variant="outlined"
                                            type="text"
                                            value={datos_tickets.item[0].monto_pagar}
                                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            autoFocus
                                            disabled
                                            margin="dense"
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            onClick={() => pagar(datos_tickets.item[0].ticket_id)}
                                        >
                                            Pagar
                                </Button>
                                    </FormControl>
                                </DialogContent>

                            </Dialog>
                        </Paper>
                    }
                </Grid>
            </Grid>
        </div>

    );
}
//Indica que debe recibir una variable de tipo String llamada Patente y es requerida
CerrarTicket.propTypes = {
    patente: PropTypes.string.isRequired
};
export default CerrarTicket;
