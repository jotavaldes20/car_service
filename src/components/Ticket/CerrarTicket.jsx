import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
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
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
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

const CerrarTicket = ({ id, ...props }) => {
    const classes = useStyles();
    const valueRef = useRef('') //crear una referencia para el componente TextField
    const [open, setOpen] = useState(false);
    const [montoPagar, setMontoPagar] = useState(1000);
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const {empresa_id}=user;
    const {patente, ticket_id,fullWidthAttr}=props
    const handleOpen = () => {
        if(!patente==""){
            setOpen(!open);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    function CerrarTicket(e) {
        e.preventDefault();
        if(!patente==""){
            alert(patente)
            //dispatch(ticketActions.cambiar_patente(empresa_id,valueRef.current.value,id));
        }
        else{
            alert(patente)
        }
        
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

                    <ColorButton variant="contained"  color="primary" size="small" fullWidth
                        style={{ marginLeft: 2 }} onClick={handleOpen} >
                        Cerrar Ticket
                         </ColorButton>
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
                                    value={montoPagar}
                                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                                    
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
                                        onClick={CerrarTicket}
                                    >
                                       Pagar
                                </Button>
                            </FormControl>
                            </DialogContent>

                        </Dialog>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}
export default CerrarTicket;
