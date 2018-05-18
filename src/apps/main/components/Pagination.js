/* @flow */
import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <nav
        aria-label="Pagination"
        className="grid-x grid-padding-x align-center"
      >
        <ul className="pagination">
          <li className="pagination-previous disabled">
            Previous <span className="show-for-sr">page</span>
          </li>
          <li className="current">
            <span className="show-for-sr">You're on page</span> 1
          </li>
          <li>
            <a href="#" aria-label="Page 2">
              2
            </a>
          </li>
          <li>
            <a href="#" aria-label="Page 3">
              3
            </a>
          </li>
          <li>
            <a href="#" aria-label="Page 4">
              4
            </a>
          </li>
          <li className="ellipsis" aria-hidden="true" />
          <li>
            <a href="#" aria-label="Page 12">
              12
            </a>
          </li>
          <li>
            <a href="#" aria-label="Page 13">
              13
            </a>
          </li>
          <li className="pagination-next">
            <a href="#" aria-label="Next page">
              Next <span className="show-for-sr">page</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
