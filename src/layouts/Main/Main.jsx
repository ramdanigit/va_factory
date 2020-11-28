import React from "react";
import { NavBar, BottomNav } from "./components";
import { Box } from "@material-ui/core";
import { Home, AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    paddingBottom: "86px",
  },
});

const dataBottomNav = [
  {
    label: "Beranda",
    icon: <Home />,
  },
  {
    label: "Akun",
    icon: <AccountCircle />,
  },
];

function Main(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Box bgcolor="#f5f5f5" height="100%">
        {children}
      </Box>
      <Box position="static">
        <BottomNav data={dataBottomNav} />
      </Box>
    </div>
  );
}

export default Main;
