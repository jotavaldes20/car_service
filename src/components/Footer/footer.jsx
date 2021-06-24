import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import '../../assets/css/footer.styles.scss'
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#2E3B55",
    maxHeight: 50,
  },
  Toolbar:{
    justifyContent: "center",
    alignItems: "center",
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Container maxWidth="sm">
        <Toolbar className={classes.Toolbar}>
          <p>&copy; {new Date().getFullYear()} - Jorge Valdes</p>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
