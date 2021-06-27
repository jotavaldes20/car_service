import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer/footer";
import MenuHeader from "../components/Menu/Menu"
import { Box, Container, Grid } from "@material-ui/core";
const drawerWidth = 240;
const headerHeight = 120;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  /*toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 80px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },*/
}));
const LayoutBase = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuHeader />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {children}
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
          </Container>
      </main>
    </div>
  );
};

export default LayoutBase;
