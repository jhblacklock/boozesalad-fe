/* @flow */
import React from "react";
import "./Login.scss";
import { Icon } from "react-foundation";
import { Link } from "react-router";

export default class Login extends React.PureComponent {
  render() {
    return (
      <div className="grid-x grid-padding-x align-center padding-2">
        <form className="log-in-form">
          <button type="button" className="button social facebook width-100">
            <Icon prefix="fi" name="social-facebook" /> Facebook
          </button>
          <p className="text-center separator-center">Or</p>
          <h4 className="text-center">Log in with you email account</h4>
          <label>Email</label>
          <input type="email" placeholder="somebody@example.com" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <input id="show-password" type="checkbox" />
          <label htmlFor="show-password">Show password</label>
          <p>
            <Link to="/join/sign-up" className="button expanded">
              Click to login
            </Link>
          </p>
          <p className="text-center">
            <a href="#">Forgot your password?</a>
          </p>
        </form>
      </div>
    );
  }
}
