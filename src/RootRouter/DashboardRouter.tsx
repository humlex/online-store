import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import Header from "../containers/Header";

const DashboardRoute: FC<RouteProps> = (props) => (
  <React.Fragment>
    <Header />
    <Route {...props} />
  </React.Fragment>
);

export default DashboardRoute;
