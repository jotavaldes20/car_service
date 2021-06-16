import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar  } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import VerTicket from '../Ticket/VerTicket'
import CerrarTicket from '../Ticket/CerrarTicket'
import { ticketActions } from "../../actions";
import Loader from "../Loader/Loader"
import CambiarPatente from "./CambiarPatente";
const columns = [
    { field: 'id', headerName: 'ID', width: 100, hide: true},
    { field: 'patente', headerName: 'Patente', width: 130 },
    { field: 'fecha_ingreso', headerName: 'Fecha Ingreso', width: 300 },
    { field: 'num_ticket', headerName: 'Num Ticket', width: 200 },
    {
        field: 'accion',
        headerName: 'accion',
        renderCell: (params) => (
            <strong>
                <ButtonGroup>

                    <VerTicket key={params.row.id} {...params.row} />
                    <CambiarPatente {...params.row} />
                    <CerrarTicket  {...params.row} />
                </ButtonGroup>
            </strong>
        ),
        width: 600
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const TicketsAbiertos = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets);
    const user = useSelector(state => state.authentication.user);
    useEffect(() => {
        console.log(user.empresa_id)
        var empresa_id = user.empresa_id
        //const { from } = location.state || { from: { pathname: "/TicketsAbiertos" } };
        dispatch(ticketActions.tickets_abiertos(empresa_id));
        console.log("tickets Abiertos", tickets)
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
                                    pageSize={10}
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

export default TicketsAbiertos;