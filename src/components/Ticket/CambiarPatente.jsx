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
import { green } from '@material-ui/core/colors';
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
        backgroundColor: green[700],
        '&:hover': {
            backgroundColor: green[900],
        },
    },
}))(Button);
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <InputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[a-z]/, /[a-z]/, /\w/,/\w/, /\d/, /\d/]}
            placeholderChar='*'
            guide={true}
            showMask={false}
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
}
const CambiarPatente = ({ id, ...props }) => {
    const classes = useStyles();
    const valueRef = useRef('') //crear una referencia para el componente TextField
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const {empresa_id}=user;
    const {patente, ticket_id}=props
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function CambiarPatente(e) {
        e.preventDefault();
        if(!valueRef.current.value==""){
            dispatch(ticketActions.cambiar_patente(empresa_id,valueRef.current.value,id));
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

                    <ColorButton variant="contained" color="primary" size="small"
                        style={{ marginLeft: 2 }} onClick={handleOpen} >
                        Cambiar Patente
                         </ColorButton>
                    <Paper className={classes.paper}>
                        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

                            <DialogTitle id="simple-dialog-title">Cambiar Patente {patente}</DialogTitle>    
                            <DialogContent >
                            <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="nueva-patente">Nueva Patente</InputLabel>
                            <OutlinedInput
                                    id="patente" 
                                    label="Nueva Patente" 
                                    variant="outlined" 
                                    type="text" 
                                    inputRef={valueRef} 
                                    inputComponent={TextMaskCustom} 
                                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                                    fullWidth 
                                    autoFocus
                                    margin="dense"
                                />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={CambiarPatente}
                                    >
                                        Cambiar Patente
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
//Indica que debe recibir una variable de tipo String llamada Patente y es requerida
CambiarPatente.propTypes = {
    patente: PropTypes.string.isRequired
};
export default CambiarPatente
