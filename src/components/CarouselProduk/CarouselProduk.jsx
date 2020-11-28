import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ClampLines from "react-clamp-lines";
import produk from "assets/img/product.png";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 120,
    marginRight: 4,
  },
  media: {
    height: 120,
    width: 120,
  },
  harga: {
    bottom: 0,
    right: 0,
    // position: "absolute",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "2px 4px",
    borderRadius: "20px",
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: 0,
  },
  paperMedia: {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paperText: {
    fontSize: 12,
    color: "#616161",
  },
});

function CarouselProduk() {
  const classes = useStyles();
  return (
    <Box width="100%">
      <PerfectScrollbar>
        <Box display="flex" flexDirection="row" marginBottom={1}>
          <Paper className={classes.root}>
            <Box position="relative">
              <img
                src={produk}
                alt="produk"
                height={120}
                width={120}
                className={classes.paperMedia}
              />
              <Box display="absolute" top={0} right={0}>
                Sold-out
              </Box>
            </Box>
            <Box padding="0 4px">
              <ClampLines
                text={"Vadsad asda dasd asdas dsad adsad asdas"}
                id="id"
                lines={1}
                ellipsis="..."
                buttons={false}
                className={classes.paperText}
                innerElement="p"
              />
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              padding="0 4px 4px 4px"
            >
              <div className={classes.harga}>Rp.120.000</div>
            </Box>
          </Paper>
          <Paper className={classes.root}>
            <Box position="relative">
              <img
                src={produk}
                alt="produk"
                height={120}
                width={120}
                className={classes.paperMedia}
              />
            </Box>
            <Box padding="0 4px">
              <ClampLines
                text={"Vadsad asddasdsaa dasd asdas dsad adsadasdasdasd asdas"}
                id="id"
                lines={1}
                ellipsis="..."
                buttons={false}
                className={classes.paperText}
                innerElement="p"
              />
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              padding="0 4px 4px 4px"
            >
              <div className={classes.harga}>Rp.120.000</div>
            </Box>
          </Paper>
          <Paper className={classes.root}>
            <Box position="relative">
              <img
                src={produk}
                alt="produk"
                height={120}
                width={120}
                className={classes.paperMedia}
              />
            </Box>
            <Box padding="0 4px">
              <ClampLines
                text={"Vadsad asddasdsaa dasd asdas dsad adsadasdasdasd asdas"}
                id="id"
                lines={1}
                ellipsis="..."
                buttons={false}
                className={classes.paperText}
                innerElement="p"
              />
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              padding="0 4px 4px 4px"
            >
              <div className={classes.harga}>Rp.120.000</div>
            </Box>
          </Paper>
        </Box>
      </PerfectScrollbar>
    </Box>
  );
}

export default CarouselProduk;
