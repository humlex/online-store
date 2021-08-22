export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_CATALOG = "CLEAR_PRODUCTS";

type Product = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

export const addProduct = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (id: number) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const clearCatalog = () => ({
  type: CLEAR_CATALOG,
});
