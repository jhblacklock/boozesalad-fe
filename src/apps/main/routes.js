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
import VerifyApp from "./containers/VerifyApp";
import UserApp from "./containers/UserApp";
import PortfolioApp from "./containers/portfolio/PortfolioApp";
import PortfolioStartApp from "./containers/portfolio/PortfolioStartApp";
import PortfolioBasicInfoApp from "./containers/portfolio/PortfolioBasicInfoApp";
import PortfolioCategoriesApp from "./containers/portfolio/PortfolioCategoriesApp";
import PortfolioMenusApp from "./containers/portfolio/PortfolioMenusApp";
import PortfolioMenusEditApp from "./containers/portfolio/PortfolioMenusEditApp";
import PortfolioPhotosApp from "./containers/portfolio/PortfolioPhotosApp";
import PortfolioVideosApp from "./containers/portfolio/PortfolioVideosApp";
import PortfolioDetailsApp from "./containers/portfolio/PortfolioDetailsApp";
import PortfolioBookingTermsApp from "./containers/portfolio/PortfolioBookingTermsApp";
import PortfolioCalendarApp from "./containers/portfolio/PortfolioCalendarApp";
import CategoryApp from "./containers/CategoryApp";
import CategoryWithLocationApp from "./containers/CategoryWithLocationApp";
import SearchApp from "./containers/SearchApp";

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
      <Route name="sign-up" component={SignUpApp} path="sign-up" />
      <Route name="quote" component={QuoteApp} path="quote" />
      <Route path="join">
        <IndexRoute component={JoinApp} />
        <Route name="sign-up" component={SignUpApp} path="sign-up" />
        <Route name="verify" component={VerifyApp} path="verify" />
      </Route>
      <Route path="portfolio">
        <IndexRoute component={PortfolioApp} />
        <Route name="start" component={PortfolioStartApp} path="start" />
        <Route
          name="basic-info"
          component={PortfolioBasicInfoApp}
          path="basic-info"
        />
        <Route
          name="categories"
          component={PortfolioCategoriesApp}
          path="categories"
        />
        <Route name="photos" component={PortfolioPhotosApp} path="photos" />
        <Route name="videos" component={PortfolioVideosApp} path="videos" />
        <Route name="details" component={PortfolioDetailsApp} path="details" />
        <Route
          name="booking-terms"
          component={PortfolioBookingTermsApp}
          path="booking-terms"
        />
        <Route name="menus" component={PortfolioMenusApp} path="menus" />
        <Route
          name="menusEdit"
          component={PortfolioMenusEditApp}
          path="menus/edit"
        />
        <Route
          name="calendar"
          component={PortfolioCalendarApp}
          path="calendar"
        />
      </Route>
      <Route name="search" component={SearchApp} path="search" />
      <Route name="category" component={CategoryApp} path="c/:categoryId" />
      <Route
        name="categoryLocation"
        component={CategoryWithLocationApp}
        path="c/:categoryId/:state/:city"
      />
      <Route name="user" component={UserApp} path=":userId" />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Route>
  );
}
