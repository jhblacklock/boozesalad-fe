/* @flow */
import React from "react";
import "./Home.css";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="Home-header">
          <h1>Welcome to BoozeSalad</h1>
        </div>
        <div className="Home-row padding-2">
          <div className="radius bordered shadow card margin-1">
            <img src="https://placehold.it/500x250" />
            <div className="card-divider">Styled Card</div>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </div>
          </div>
          <div className="radius bordered shadow card margin-1">
            <img src="https://placehold.it/500x250" />
            <div className="card-divider">Styled Card</div>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </div>
          </div>
          <div className="radius bordered shadow card margin-1">
            <img src="https://placehold.it/500x250" />
            <div className="card-divider">Styled Card</div>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </div>
          </div>
          <div className="radius bordered shadow card margin-1">
            <img src="https://placehold.it/500x250" />
            <div className="card-divider">Styled Card</div>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>
                It has an easy to override visual style, and is appropriately
                subdued.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
