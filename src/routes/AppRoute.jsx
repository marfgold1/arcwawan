import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, path, customProps, ...rest }) => {
  return (
    <Route path={path} render={(props) => <Component {...props} {...customProps} />} {...rest} />
  );
};

export default AppRoute;
