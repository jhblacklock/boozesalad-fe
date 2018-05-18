/* @flow */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import PortfolioMenusEdit from "../../components/portfolio/PortfolioMenusEdit";
import Sidebar from "../../components/portfolio/Sidebar";

export class PortfolioMenusEditApp extends React.PureComponent {
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
      <div className="grid-container padding-vertical-3">
        <Helmet title="PortfolioMenusEditApp" />
        <div className="grid-x grid-margin-x">
          <div className="cell large-3">
            <Sidebar />
          </div>
          <div className="cell large-9">
            <PortfolioMenusEdit />
          </div>
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
)(PortfolioMenusEditApp);
