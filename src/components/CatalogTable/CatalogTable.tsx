import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { ReducersType, ProductType } from "../../types/types";
import useStyles from "./useStyles";

const CatalogTable = () => {
  const classes = useStyles();
  const products = useSelector(
    (state: ReducersType) => state.CatalogReducer.products
  );
  return (
    <TableContainer elevation={5} component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Preview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: ProductType, index: number) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price} $</TableCell>
              <TableCell>
                <img
                  src={product.img}
                  alt="phone-img"
                  className={classes.image}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CatalogTable;
