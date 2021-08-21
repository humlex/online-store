import React from "react";
import { Box } from "@material-ui/core";
import Searchbar from "./Searchbar";
import FilterPannel from "./FilterPannel";
import useStyles from "./useStyles";

const AuxiliaryPannel = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root_container}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Searchbar />
      <FilterPannel />
    </Box>
  );
};

export default AuxiliaryPannel;
