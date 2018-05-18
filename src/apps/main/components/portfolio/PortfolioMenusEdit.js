/* @flow */
import React from "react";
import { Link } from "react-router";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";
import MenuItems from "./MenuItems";

type State = {
  itemCount: number,
};
export default class PortfolioMenusEdit extends React.PureComponent {
  state: State = {
    itemCount: 1,
  };

  render() {
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Menus</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>The Goods.</h2>
            <p>Try to create a Tasting Menu for each category you belong to.</p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <form className="width-100" action="#" method="POST">
                <div className="grid-x grid-padding-y">
                  <div className="medium-12 cell">
                    <label htmlFor="">
                      What category will this menu belong to?
                      <select>
                        <option value="whiskey">Whiskey Tasting</option>
                        <option value="mezcal">Mezcal Tasting</option>
                        <option value="wine">Wine Tasting</option>
                        <option value="beer">Beer Tasting</option>
                      </select>
                    </label>
                  </div>
                  <div className="medium-12 cell">
                    <label htmlFor="">What will you call this menu?</label>
                    <input type="text" />
                    <p className="help-text">
                      limit to 20 characters. e.g. Peat Bomb, Whiskey's of Texas
                    </p>
                  </div>
                  <div className="medium-12 cell">
                    <label htmlFor="">Give this menu a descripton</label>
                    <textarea />
                  </div>
                  <div className="medium-12 cell">
                    <h4>Menu Items</h4>
                  </div>
                  <MenuItems itemCount={this.state.itemCount} />
                </div>
              </form>
            </div>
          </PortfolioSection>
          <section className="grid-x grid-padding-x buttons align-right padding-1">
            <Link to="portfolio/photos" className="button">
              Save
            </Link>
          </section>
        </div>
      </Box>
    );
  }

  addNewItemHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const { itemCount } = this.state;
    this.setState({ itemCount: itemCount + 1 });
  };
}
