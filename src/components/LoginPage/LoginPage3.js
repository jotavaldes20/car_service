import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import background from "../../assets/img/carService2.jpg";
import logo from "../../assets/img/carServiceLogo.png";
import { Card, CardContent } from "@material-ui/core";
import FuseAnimate from "../../@fuse/FuseAnimate/FuseAnimate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.rakidwam.cl" target="_blank">
        RAKIDWAM
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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container} maxWidth="xl">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FuseAnimate>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-32">
              <img className={classes.center} src={logo} alt="logo" />
              <Typography variant="h6" className="mt-16 mb-32" align="center">
                Iniciar Sesion
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Usuario"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
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
}
