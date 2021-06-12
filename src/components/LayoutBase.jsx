import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { userActions } from "../actions";
import Footer from "../components/Footer/footer.jsx";
import MenuHeader from "../components/Menu/index"
const drawerWidth = 240;
const headerHeight = 120;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const LayoutBase = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuHeader />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutBase;
