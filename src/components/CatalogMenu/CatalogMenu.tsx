import React, { MouseEvent } from "react";
import useStyles from "./useStyles";
import { CLEAR_CATALOG } from "../../redux/UserCatalog/actions";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography, Button } from "@material-ui/core";
import { ReducersType } from "../../types/types";

const CatalogMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const catalog = useSelector(
    (state: ReducersType) => state.CatalogReducer.products
  );
  const total = catalog.reduce((total, product) => {
    return total + product.price;
  }, 0);
  const catalogLength = catalog.length;

  const averagePrice =
    catalogLength !== 0 ? (total / catalogLength).toFixed(2) : 0;

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: CLEAR_CATALOG });
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
