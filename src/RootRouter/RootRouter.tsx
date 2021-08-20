import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import ProductAddPage from "../pages/ProductAddPage";
import AccessError from "../pages/AccessError";
import DashboardRouter from "./DashboardRouter";

const RootRouter = () => (
  <Router>
    <Switch>
      <DashboardRouter exact path="/" component={Home} />
      <DashboardRouter exact path="/catalog" component={Catalog} />
      <DashboardRouter exact path="/add_product" component={ProductAddPage} />
      <DashboardRouter exact path="/access_error" component={AccessError} />
    </Switch>
  </Router>
);

export default RootRouter;
