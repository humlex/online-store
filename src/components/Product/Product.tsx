import React, { FC } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import useStyles from "./useStyles";

type ProductProps = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

const Product: FC<ProductProps> = ({ id, name, img, description, price }) => {
  const classes = useStyles();
  const defaultUrl =
    "https://i.citrus.ua/uploads/shop/a/6/a6c56497276a0bd71793f2ad0307c60d.jpg";
  return (
    <Grid item xs={3} className={classes.grid_item}>
      <Card className={classes.product_card}>
        <img
          className={classes.image}
          src={img ? img : defaultUrl}
          alt="phone-img"
        />
        <CardContent>
          <Typography className={classes.name}>{name}</Typography>
          <Typography>Model: {description}</Typography>
          <Typography>Price: {price}$</Typography>
        </CardContent>
        <CardActionArea>
          <Button className={classes.card_button}>Buy now!</Button>
          <Button className={classes.card_button}>Remove from catalog</Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
