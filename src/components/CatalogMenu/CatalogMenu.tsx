import React, { MouseEvent } from "react";
import useStyles from "./useStyles";
import { Paper, Typography, Button } from "@material-ui/core";

const CatalogMenu = () => {
  const classes = useStyles();
  const total = 50.13;
  const averagePrice = 40.22;

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <Typography>Total: {total}$ </Typography>
      <Typography>Average: {averagePrice}$</Typography>
      <Button className={classes.clear_btn} onClick={handleClick}>
        Clear
      </Button>
    </Paper>
  );
};

export default CatalogMenu;
