import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "./useStyles";

type Phone = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

const Products = () => {
  const classes = useStyles();
  const [phones, setPhones] = useState<Phone[]>([]);

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
      Products
      <br />
      <button>get data</button>
    </>
  );
};

export default Products;
