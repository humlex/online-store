import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Paper, Typography, Box } from "@material-ui/core";
import useStyles from "./useStyles";

const AccessErrorCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.access_error_card}>
      <img
        className={classes.smile}
        src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-120_smiley_sad-512.png"
        alt="sad_smile"
      />
      <Typography className={classes.error}>
        Ooops! It looks like you don`t have enough permission to visit this page
        :(
      </Typography>
      <Box className={classes.link}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Back to homepage
        </Link>
        <ArrowForwardIosIcon />
      </Box>
    </Paper>
  );
};

export default AccessErrorCard;
