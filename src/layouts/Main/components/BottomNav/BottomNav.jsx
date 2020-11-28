import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink as RouterLink } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: 0,
  },
});

const CustomRouterLink = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ width: "100%", display: "flex" }}>
    <RouterLink {...props} />
  </div>
));

function BottomNav(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      {data.map((value, index) => (
        <BottomNavigationAction
          label={value.label}
          icon={value.icon}
          key={index}
        />
      ))}
    </BottomNavigation>
  );
}

export default BottomNav;
