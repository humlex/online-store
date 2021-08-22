import React, { FC } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./useStyles";

type ProductProps = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

type ReduxStateType = {
  AccountReducer: {
    role: string;
  };
};

const Product: FC<ProductProps> = ({ id, name, img, description, price }) => {
  const classes = useStyles();
  const history = useHistory();
  const role = useSelector(
    (state: ReduxStateType) => state.AccountReducer.role
  );
  const defaultUrl =
    "https://i.citrus.ua/uploads/shop/a/6/a6c56497276a0bd71793f2ad0307c60d.jpg";

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3004/phones/${id}`);
    } catch (err) {
      console.error(err);
    } finally {
      history.go(0);
    }
  };

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
      {role === "admin" && (
        <Button className={classes.delete_btn} onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </Button>
      )}
    </Grid>
  );
};

export default Product;
