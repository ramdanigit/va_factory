import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout } from "./layouts";
import { Landing, NotFound } from "./views";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
        <RouteWithLayout
          component={Landing}
          exact
          layout={MainLayout}
          path="/landing"
        />
        <RouteWithLayout
          component={NotFound}
          exact
          layout={MainLayout}
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
