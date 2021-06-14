import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../actions";
import useForm from "../../@fuse/hooks/useForm";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import background from "../../assets/img/carService2.jpg";
import logo from "../../assets/img/carServiceLogo.png";
import FuseAnimate from "../../@fuse/FuseAnimate/FuseAnimate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.rakidwam.cl" target="_blank">
        RAKIDWAM Spa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: 800,
    backgroundImage: `url(${background})`,
    //backgroundImage: 'url(https://source.unsplash.com/1600x900/?parking)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw + 48px)`,
    margin: -14,
    padding: 25,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  containerLogin: {
    position: "relative",
    borderRadius: "8px 8px 8px 8px",
    backgroundColor: "white",
    color: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  center: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

export const SignIn = () => {
  const classes = useStyles(); //ocupar estilos definidos con makeStyles
  const { form, handleChange, resetForm } = useForm({
    username: "",
    password: "",
    remember: true,
  });

  function isFormValid() {
    return form.username.length > 0 && form.password.length > 0;
  }
  const dispatch = useDispatch();
  const location = useLocation();

  //al entrar al login reset login status
  useEffect(() => {
      dispatch(userActions.logout());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid()) {
      // obtener la URL de retorno del estado de la ubicación o por defecto a la página de inicio
      const { from } = location.state || { from: { pathname: "/HomePage" } };
      dispatch(userActions.login(form.username, form.password, from));
    }
  }
  return (    
    <Container component="main" className={classes.container} maxWidth="xl">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FuseAnimate animation="transition.expandIn">
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-32">
              <img className={classes.center} src={logo} alt="logo" />
              <Typography variant="h6" className="mt-16 mb-32" align="center">
                Iniciar Sesión
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={form.username}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                />
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="remember"
                        checked={form.remember}
                        onChange={handleChange}
                      />
                    }
                    label="Remember Me"
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!isFormValid()}
                >
                  Iniciar Sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ¿Se te olvidó tu contraseña?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"¿No tienes una cuenta? Registrate"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <Box mt={8}>
                <Copyright />
              </Box>
            </CardContent>
          </Card>
        </FuseAnimate>
      </Container>
    </Container>
  );
};
export default SignIn;
