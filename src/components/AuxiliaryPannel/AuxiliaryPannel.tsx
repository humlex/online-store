import React, { FC } from "react";
import { Box } from "@material-ui/core";
import Searchbar from "./Searchbar";
import useStyles from "./useStyles";
import { PropsType } from "./types";

const AuxiliaryPannel: FC<PropsType> = ({ onChange }) => {
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
    </Box>
  );
};

export default AuxiliaryPannel;
