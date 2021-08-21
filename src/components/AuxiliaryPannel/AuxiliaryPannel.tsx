import React, { FC } from "react";
import { Box } from "@material-ui/core";
import Searchbar from "./Searchbar";
import FilterPannel from "./FilterPannel";
import useStyles from "./useStyles";

type AuxiliaryPanelProps = {
  onChange: (value: string) => void;
};

const AuxiliaryPannel: FC<AuxiliaryPanelProps> = ({ onChange }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root_container}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Searchbar onChange={(value: string) => onChange(value)} />
      <FilterPannel />
    </Box>
  );
};

export default AuxiliaryPannel;
