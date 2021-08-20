import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import useStyles from "./useStyles";

const Logo = () => {
  const classes = useStyles();
  return (
    <Link className={classes.root_logo} to="/">
      <Box className={classes.left_part}>
        <p>OS</p>
      </Box>
      <Box className={classes.right_part}>
        <p>system</p>
      </Box>
    </Link>
  );
};
export default Logo;
