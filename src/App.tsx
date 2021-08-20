import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import RootRouter from "./RootRouter/RootRouter";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default App;
