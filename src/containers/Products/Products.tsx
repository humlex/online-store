import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Container } from "@material-ui/core";
import AuxiliaryPannel from "../../components/AuxiliaryPannel";
import Product from "../../components/Product";
import useStyles from "./useStyles";

type ProductType = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

const Products = () => {
  const classes = useStyles();
  const [phones, setPhones] = useState<ProductType[]>([]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:3004/phones");
      setPhones(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Box display="flex" className={classes.content_box}>
        <Container>
          <AuxiliaryPannel />
        </Container>
        <Grid container spacing={5}>
          {phones.map((phone: ProductType) => (
            <Product
              id={phone.id}
              name={phone.name}
              img={phone.img}
              description={phone.description}
              price={phone.price}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
