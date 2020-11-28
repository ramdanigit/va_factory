import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  AppBar,
  Button,
  IconButton,
  Box,
  Toolbar,
  // Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "assets/img/va_factory.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    width: "20px",
    height: "20px",
    color: "#000000",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: "none",
    height: "35px",
    backgroundColor: "#ffffff",
  },
  toolbar: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          padding="0 7px"
        >
          <IconButton
            edge="start"
            classeName={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            flexGrow="1"
            justifyContent="center"
            color="#000000"
          >
            VA Factory
          </Box>

          <IconButton
            edge="start"
            classeName={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ShoppingCartIcon className={classes.menuButton} />
          </IconButton>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
