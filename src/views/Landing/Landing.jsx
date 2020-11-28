import React from "react";
import { CarouselView } from "components";
import { Box } from "@material-ui/core";

function Landing() {
  return (
    <React.Fragment>
      <Box padding="5px 5px 0 5px">
        <CarouselView />
      </Box>
    </React.Fragment>
  );
}

export default Landing;
