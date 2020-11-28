import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "40px",
    width: "100%",
    // backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
});

function TabProduk(props) {
  const { title, subTitle } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box fontSize="17px" flexGrow={1}>
        {title}
      </Box>
      {subTitle}
      <IconButton aria-label="tab">
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}

export default TabProduk;
