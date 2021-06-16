import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from "@material-ui/core/DialogContent";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';
import InputMask from 'react-text-mask';
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
const CambiarPatente = ({ id, patente, fecha_ingreso, num_ticket, abierto }) => {
    const classes = useStyles();
    const valueRef = useRef('') //creating a refernce for TextField Component
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function CambiarPatente(e) {
        e.preventDefault();
        if(!valueRef.current.value==""){
            alert(valueRef.current.value)
        }
       
        //dispatch(userActions.login(form.username, form.password, from));
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
                                <Input id="patente" label="Nueva Patente" variant="outlined" type="text" inputRef={valueRef} inputComponent={TextMaskCustom} inputProps={{min: 0, style: { textAlign: 'center' }}}  />
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
                            </DialogContent>
                        </Dialog>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}
export default CambiarPatente
