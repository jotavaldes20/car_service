import React, { useRef,useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';
import InputMask from 'react-text-mask';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Loader from '../Loader/Loader';
import { ticketActions } from "../../actions";
import { Fragment } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
      },
}));
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
    return (
        <InputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[a-z]/, /[a-z]/, /\w/, /\w/, /\d/, /\d/]}
            placeholderChar='*'
            guide={true}
            showMask={false}
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
}
const NewTicket = () => {
    const classes = useStyles();
    const valueRef = useRef(''); //crear una referencia para el componente TextField
    const dispatch = useDispatch();
    const ingreso = useSelector(state => state.ingresar_patente);
    const {empresa_id,username}=useSelector(state => state.authentication.user);
    const [valueIngreso,setValueIngreso]=useState("")
    function IngresarPatente(e) {
        e.preventDefault();
        if(!valueRef.current.value==""){
            dispatch(ticketActions.ingresar_patente(empresa_id,valueRef.current.value,username));
            console.log(ingreso)
            console.log(ingreso.success)
            if(ingreso.success){

            }            
        }

    }
    function SacarPatente(e) {
        e.preventDefault();
        alert(valueRef.current.value)
        /*if(!valueRef.current.value==""){
            dispatch(ticketActions.cambiar_patente(empresa_id,valueRef.current.value,id));
        }*/

    }
    useEffect(() => {
        dispatch(ticketActions.fetchState())
      },[])
    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <b><h3>Nuevo Ticket</h3></b>
                    {ingreso.loading && <Loader /> }
                </Grid>
                {!ingreso.loading &&
                <Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h4>Ingresar Patente</h4>
                        <br></br>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="nueva-patente">Nueva Patente</InputLabel>
                        <OutlinedInput
                            id="patente_nueva"
                            label="Nueva Patente"
                            variant="outlined"
                            type="text"
                            inputRef={valueRef}
                            inputComponent={TextMaskCustom}
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            fullWidth
                            autoFocus
                            margin="dense"
                            labelWidth={100}
                        />
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={IngresarPatente}
                        >
                            Ingresar
                                </Button>
                        </FormControl>
                        

                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h4>Salida</h4>
                        <br/>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="salida-patente">Salida Patente</InputLabel>
                        <OutlinedInput
                            id="patente_salida"
                            label="Salida Patente"
                            variant="outlined"
                            type="text"
                            inputRef={valueRef}
                            inputComponent={TextMaskCustom}
                            inputProps={{ min: 0, style: { textAlign: 'center' } }}
                            fullWidth
                            margin="dense"
                            labelWidth={100}
                        />
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={SacarPatente}
                        >
                            salida
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>                
                </Fragment>}
            </Grid>
        </div>
    )
}
export default NewTicket;
