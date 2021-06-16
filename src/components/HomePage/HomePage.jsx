import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import carServiceImg from "../../assets/img/solucion_app_carservice_verde.svg";
import { useSelector } from 'react-redux';
import { flexDirection } from '@material-ui/system';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    posicion: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      flexGrow: 1,
      position: "absolute",
      padding: theme.spacing(3),
    },
  })
);
const HomePage = () => {
  const user = useSelector((state) => state.authentication.user);
  console.log("user: ", user);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container
        spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="center" >
        <Grid item sm={12} xs={12}>
          <h2>Bienvenido a CarService</h2>
        </Grid>
        <Grid item sm={12} xs={12}>
          <img alt="carservice" src={carServiceImg} width="250" maxwidth="250" />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
