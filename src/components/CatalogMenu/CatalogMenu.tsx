import React, { MouseEvent } from "react";
import useStyles from "./useStyles";
import { CLEAR_CATALOG } from "../../redux/UserCatalog/actions";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography, Button } from "@material-ui/core";

type Product = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

type CatalogReducer = {
  CatalogReducer: {
    products: Product[];
  };
};

const CatalogMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const catalog = useSelector(
    (state: CatalogReducer) => state.CatalogReducer.products
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
  console.log("catalog", catalog);
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
