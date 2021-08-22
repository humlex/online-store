export type ProductType = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

export type ReducersType = {
  AccountReducer: {
    role: string;
  };
  CatalogReducer: {
    products: ProductType[];
  };
};

export type ActionType = {
  type: string;
  id?: number;
  payload?: ProductType;
};
