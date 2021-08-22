import { ProductType } from "../../types/types";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_CATALOG = "CLEAR_PRODUCTS";

export const addProduct = (product: ProductType) => ({
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
