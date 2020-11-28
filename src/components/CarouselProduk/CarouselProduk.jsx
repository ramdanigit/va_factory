import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ClampLines from "react-clamp-lines";
import clsx from "clsx";
import { Box, Paper } from "@material-ui/core";
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
  status: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(215, 44, 44, 0.7)",
    fontSize: 8,
    color: "#ffffff",
    fontWeight: 0,
    margin: 4,
    padding: "2px 4px",
    borderRadius: "4px",
  },
  statusReady: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0, 230, 119, 0.7)",
    fontSize: 8,
    color: "#ffffff",
    fontWeight: 0,
    margin: 4,
    padding: "2px 4px",
    borderRadius: "4px",
  },
  statusOrder: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(255, 193, 7, 0.7)",
    fontSize: 8,
    color: "#ffffff",
    fontWeight: 0,
    margin: 4,
    padding: "2px 4px",
    borderRadius: "4px",
  },
});

function CarouselProduk(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box width="100%">
      <PerfectScrollbar>
        <Box display="flex" flexDirection="row" marginBottom={1}>
          {data
            ? data.map((value, index) => (
                <Paper className={classes.root} key={index}>
                  <Box position="relative">
                    <img
                      src={value.img}
                      alt="produk"
                      height={120}
                      width={120}
                      className={classes.paperMedia}
                    />
                    <div
                      className={clsx({
                        [classes.status]: value.status === "sold-out",
                        [classes.statusOrder]: value.status === "pre-order",
                        [classes.statusReady]: value.status === "ready",
                      })}
                    >
                      {value.status}
                    </div>
                  </Box>
                  <Box padding="0 4px">
                    <ClampLines
                      text={value.title}
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
                    <div className={classes.harga}>{value.harga}</div>
                  </Box>
                </Paper>
              ))
            : ""}
        </Box>
      </PerfectScrollbar>
    </Box>
  );
}

export default CarouselProduk;
