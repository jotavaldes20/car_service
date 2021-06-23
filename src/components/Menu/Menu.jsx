import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TicketIcon from "@material-ui/icons/ConfirmationNumber";
import ListIcon from "@material-ui/icons/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ConfigIcon from "@material-ui/icons/Build"
import { userActions } from "../../actions";
const drawerWidth = 240;
const headerHeight = 120;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    marginLeft: 0,
    padding: 0
  },
  title: {
      flexGrow: 1,
      letterSpacing: 1.6 * 4
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#2E3B55",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    height:100,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
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
  header: {
    height: headerHeight,
    minHeight: headerHeight,
    display: "flex",
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.dark +
      " 0%, " +
      theme.palette.primary.main +
      " 100%)",
    color: theme.palette.primary.contrastText,
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.dark,
  },
  topBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    pointerEvents: "none",
  },
}));
const MenuHeader = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openPerfil = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function CerrarSesion() {
    dispatch(userActions.logout());
  }
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
          Car Service
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openPerfil}
            onClose={handleClose}
          >
            <MenuItem onClick={CerrarSesion}>Cerrar Sesion</MenuItem>
            <MenuItem key="CambiarEstacionamiento" component={Link} to="/CambiarEstacionamiento">Cambiar Estacionamiento</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List>
        <Tooltip title="Home" placement="right-start" arrow> 
          <ListItem button key="home" component={Link} to="/HomePage" onClick={handleDrawerClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
            </Tooltip>
            <Tooltip title="Nuevo Ticket" placement="right-start" arrow> 
          <ListItem button key="NewTicket" component={Link} to="/NewTicket" onClick={handleDrawerClose}>
            <ListItemIcon>
              <TicketIcon />
            </ListItemIcon>
            <ListItemText primary="Nuevo Ticket" />
          </ListItem>
          </Tooltip>
          <Tooltip title="Tickets Abiertos" placement="right-start" arrow> 
          <ListItem button key="TicketsAbiertos" component={Link} to="/TicketsAbiertos" onClick={handleDrawerClose}>
            <ListItemIcon>
              <TicketIcon />
            </ListItemIcon>
            <ListItemText primary="Ticket Abiertos" />
          </ListItem>
          </Tooltip>
          <Tooltip title="Lista Ticket" placement="right-start" arrow> 
            <ListItem button key="TicketList" component={Link} to="/TicketList" onClick={handleDrawerClose}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Lista Tickets" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Parametrizar Estacionamiento" placement="right-start" arrow> 
            <ListItem button key="ParametrizarEstacionamiento" component={Link} to="/ParametrizarEstacionamiento" onClick={handleDrawerClose}>
              <ListItemIcon>
                <ConfigIcon />
              </ListItemIcon>
              <ListItemText primary="Parametrizar Estacio..." />
            </ListItem>
          </Tooltip>
        </List>
        <Divider />
        <List>
        <Tooltip title="Cerrar Sesion" placement="right-start" arrow> 
          <ListItem button key="logout"onClick={CerrarSesion}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </div>
  );
};

export default MenuHeader;
