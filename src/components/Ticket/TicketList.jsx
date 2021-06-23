import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar  } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VerTicket from '../Ticket/VerTicket'
import { ticketActions } from "../../actions";
import Loader from "../Loader/Loader"
const currencyFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
  });
  
  const CLP = {
    type: 'number',
    width: 130,
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    cellClassName: 'font-tabular-nums',
  };
const columns = [
    { field: 'ticket_id', headerName: 'ID', width: 100, hide: true},
    { field: 'patente', headerName: 'Patente', width: 130 },
    { field: 'fecha_ingreso', headerName: 'Fecha Ingreso', width: 210 },
    { field: 'fecha_retiro', headerName: 'Fecha Retiro', width: 210 },
    { field: 'monto_cobro', headerName: 'Monto Cobrado', width: 200, ...CLP },
    { field: 'tiempo_cobro', headerName: 'Tiempo (min)', width: 200 },
    {
        field: 'accion',
        headerName: 'accion',
        renderCell: (params) => (
            <strong>
                <ButtonGroup>
                    <VerTicket {...params.row} />
                </ButtonGroup>
            </strong>
        ),
        width: 200
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& .font-tabular-nums': {
        fontVariantNumeric: 'tabular-nums',
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const TicketList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets_list);
    const user = useSelector(state => state.authentication.user);
    useEffect(() => {
        console.log(user.empresa_id)
        var empresa_id = user.empresa_id
        var user_id = user.user_id
        //const { from } = location.state || { from: { pathname: "/TicketsAbiertos" } };
        dispatch(ticketActions.tickets_list(empresa_id,user_id));
    }, []);
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h3>Tickets Abiertos</h3>
                    {tickets.loading && <Loader />}
                </Grid>
                {tickets.items &&
                    <Grid item xs={12}>
                        <div style={{ display: 'flex', height: "100%", width: '100%' }}>
                            <div style={{ flexGrow: 1 }}>
                                <DataGrid                                  
                                    rows={tickets.items}                                   
                                    columns={columns}
                                    getRowId={(row) => row.ticket_id}
                                    pageSize={7}
                                    autoHeight={true}
                                    disableColumnMenu 
                                    components={{
                                        Toolbar: GridToolbar,
                                      }}
                                />
                            </div>
                        </div>
                    </Grid>
                }
            </Grid>

        </div>

    )

}

export default TicketList;