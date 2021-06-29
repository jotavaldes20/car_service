import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotFoundParking from "../../assets/img/parking_notFound.gif";
import "../../assets/css/NotFound.styles.scss"
import { Button, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
const NotFound = () => {
    const classes = useStyles();
    return (
        <Fragment className={classes.root}>
            <Grid container spacing={0} className="not_found">
                <Grid item xs={12}>                    
                        <div className="bg" style={{ backgroundImage: `url(${NotFoundParking})` }}></div>
                        <div className="code">404</div>
                        <div className="texto">Pagina No Encontrada</div>
                        <div className="volver">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="small"
                                style={{ marginLeft: 2, marginTop:20 }}
                                href="/HomePage"
                            >
                                Volver a Inicio
                            </Button>
                        </div>
                       
                
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default NotFound
