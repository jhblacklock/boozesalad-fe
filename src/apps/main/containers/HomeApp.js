/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Home from "../components/Home";
import "../assets/css/main.scss";
import { Link } from "react-router";
// I decided not to modify webpack
import "../../../../node_modules/foundation-icons/foundation-icons";

import {
  Icon,
  Menu,
  MenuItem,
  TopBar,
  TopBarRight,
  TopBarTitle,
} from "react-foundation";

export class HomeApp extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute(/* {dispatch}, renderProps, query, serverProps */) {}

  render() {
    return (
      <div>
        <Helmet title="Home" />
        <TopBar>
          <TopBarTitle>BoozeSalad</TopBarTitle>
          <TopBarRight>
            <Menu>
              <MenuItem>
                <Link to="#">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link to="#">Sign Up</Link>
              </MenuItem>
            </Menu>
          </TopBarRight>
        </TopBar>
        <div className="padding-1">
          <form>
            <div className="input-group">
              <span className="input-group-label">
                <Icon prefix="fi" name="magnifying-glass margin-right-1" />
                Find an Enthusiast
              </span>
              <input
                className="input-group-field"
                type="text"
                placeholder="Whiskey, Mezcal, Beer, Wine Tastings..."
              />
              <div className="input-group-button">
                <input type="submit" className="button" value="Submit" />
              </div>
            </div>
          </form>
        </div>
        <Home />
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({
    /** _INSERT_STATE_  **/
  }),
  dispatch =>
    bindActionCreators(
      {
        /** _INSERT_ACTION_CREATORS_ **/
      },
      dispatch,
    ),
)(HomeApp);
