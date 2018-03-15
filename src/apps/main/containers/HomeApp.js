/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Home from "../components/Home";
import "../assets/css/main.scss";

import { Icon } from "react-foundation";

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
        <div className="hero-section">
          <div className="hero-section-text width-100">
            <h1>Welcome to BoozeSalad</h1>
            <h5>Find your Enthusiast</h5>
            <div className="padding-1">
              <form>
                <div className="input-group">
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
          </div>
        </div>

        <div className="grid-container">
          <Home />
        </div>
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
