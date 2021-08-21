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
  const [value, setValue] = useState<string>("");
  const items = phones.filter(
    (phone: ProductType) =>
      phone.name.toUpperCase().includes(value) ||
      phone.name.toLowerCase().includes(value)
  );

  const handleChange = (value: string): void => {
    setValue(value);
  };

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
          <AuxiliaryPannel onChange={(value: string) => handleChange(value)} />
        </Container>
        <Grid container spacing={5}>
          {items.map((phone: ProductType) => (
            <Product
              key={phone.id}
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
