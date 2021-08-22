import { combineReducers } from "redux";
import { AccountReducer } from "./AccountMode/reducers";
import { CatalogReducer } from "./UserCatalog/reducers";

export default combineReducers({ AccountReducer, CatalogReducer });
