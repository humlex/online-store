import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CATALOG } from "./actions";

type ActionType = {
  type: string;
  id?: number;
  payload?: Product;
};

type Product = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

type initialStateType = {
  products: Product[];
};

const initialState: initialStateType = {
  products: [
    {
      id: 1,
      name: "Samsung Galaxy Z Fold 2",
      img: "https://i.citrus.ua/uploads/shop/7/0/70c086373acd1ea4b072e383f7ef54fb.jpg",
      description:
        "Samsung Galaxy Z Fold 2 F916 12/256Gb Bronze (SM-F916BZNQSEK)",
      price: 1801.6,
    },
  ],
};

export const CatalogReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        products: state.products.filter((product) => product.id !== action.id),
      };
    case CLEAR_CATALOG:
      return {
        products: [],
      };
    default:
      return state;
  }
};
