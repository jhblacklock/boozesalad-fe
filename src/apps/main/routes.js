/* @flow */

import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "compiled/gluestick";

import MasterLayout from "./components/MasterLayout";
import HomeApp from "./containers/HomeApp";
import NoMatchApp from "./containers/NoMatchApp";
import DistilleriesApp from "./containers/DistilleriesApp";
import DistilleryApp from "./containers/DistilleryApp";
import LoginApp from "./containers/LoginApp";
import JoinApp from "./containers/JoinApp";
import SignUpApp from "./containers/SignUpApp";
import QuoteApp from "./containers/QuoteApp";

export default function routes() {
  return (
    <Route name="app" component={MasterLayout} path="/">
      <IndexRoute name="home" component={HomeApp} />
      <Route path="distilleries">
        <IndexRoute component={DistilleriesApp} />
        <Route path=":distilleryId">
          <IndexRoute component={DistilleryApp} />
        </Route>
      </Route>
      <Route name="login" component={LoginApp} path="login" />
      <Route name="join" component={JoinApp} path="join" />
      <Route name="sign-up" component={SignUpApp} path="sign-up" />
      <Route name="quote" component={QuoteApp} path="quote" />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Route>
  );
}
