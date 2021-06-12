import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import carServiceImg from "../../assets/img/solucion_app_carservice_verde.svg";
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) =>
  createStyles({
    posicion: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    grid: {
      paddingLeft: 100,
    },
  })
);
const HomePage = () => {
  const user = useSelector((state) => state.authentication.user);
  console.log("user: ", user);
  const classes=useStyles();
  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item sm={3} xs={5}>
        <h2>Bienvenido a CarService</h2>
      </Grid>
      <Grid item sm={9} xs={7}>
        <img alt="carservice" src={carServiceImg} width="500" maxwidth="200" />
      </Grid>
    </Grid>
  );
};
export default HomePage;
