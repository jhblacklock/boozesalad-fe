/* @flow */
import React from "react";
import Helmet from "react-helmet";
import config from "config/application";
import {
  Menu,
  MenuItem,
  TopBar,
  TopBarRight,
  TopBarTitle,
} from "react-foundation";
import "../../../../node_modules/foundation-icons/foundation-icons";

import { Link } from "react-router";

type Props = {
  children?: ?any,
};

export default class MasterLayout extends React.PureComponent {
  props: Props;
  render() {
    return (
      <div>
        <Helmet {...config.head} />
        <TopBar>
          <TopBarTitle>
            <Link to="/">Taste Buddha</Link>
          </TopBarTitle>
          <TopBarRight>
            <Menu>
              <MenuItem>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/join">Sign Up</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/portfolio">Dashboard</Link>
              </MenuItem>
            </Menu>
          </TopBarRight>
        </TopBar>
        {this.props.children}
      </div>
    );
  }
}
