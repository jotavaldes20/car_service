import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const VerTicket =  ({ id, ...props  }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {patente, fecha_ingreso, num_ticket,monto_cobrado}=props;
    return (
        <div>
            <Button variant="contained" color="primary" size="small"
                        style={{ marginLeft: 2 }} onClick={handleOpen} >
                Ver
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Datos Ticket patente: {patente}</DialogTitle>
            <List>
                <ListItem >
                    <p>Patente: {patente}</p>
                </ListItem>
                <ListItem >
                    <p>Fecha de ingreso: {fecha_ingreso}</p>
                </ListItem>
                {num_ticket&&
                <ListItem >
                    <p>Num Ticket: {num_ticket}</p>                
                </ListItem>
                }
                {monto_cobrado&&
                    <ListItem >
                    <p>cobro: $ {monto_cobrado}</p>
                    </ListItem>
                }
            </List>
            </Dialog>
        </div>
    );
}
// prototype: components documentation
VerTicket.propTypes = {
    patente: PropTypes.string.isRequired,
    fecha_ingreso: PropTypes.string.isRequired,
    num_ticket: PropTypes.number,

};
export default VerTicket;




