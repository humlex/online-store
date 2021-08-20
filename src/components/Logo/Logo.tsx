import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./useStyles";

const Logo = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root_logo}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box className={classes.left_part}>
        <p>OS</p>
      </Box>
      <Box className={classes.right_part}>
        <p>system</p>
      </Box>
    </Box>
  );
};
export default Logo;
