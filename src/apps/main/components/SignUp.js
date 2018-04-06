/* @flow */
import React from "react";
import "./SignUp.scss";
import { Link } from "react-router";

type State = {
  currentSection: numbers,
};

export default class SignUp extends React.PureComponent {
  state: State = {
    currentSection: 1,
  };

  render() {
    return (
      <div>
        <div className="width-100 text-center">
          <h1 className="separator-center">Glad you're here.</h1>
          <p>These steps will help build your Portfolio</p>
        </div>
        <div className="grid-x grid-padding-x align-center padding-2">
          <form className="multi-form width-100" action="#" method="POST">
            {this.state.currentSection === 1 && (
              <section className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                <div className="small-6 cell">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </section>
            )}
            {this.state.currentSection === 2 && (
              <section className="grid-x grid-margin-x">
                <center>
                  <h2>What type of service do you provider?</h2>
                  <p>
                    The category you choose determines where you appear in
                    search results and will characterize your service to
                    potential clients. Want more than one category? No worries –
                    you can add and change categories later.
                  </p>
                </center>
                <div className="medium-12 cell">
                  <label htmlFor="">Category</label>
                  <select>
                    <option value="whiskey">Whiskey Tasting</option>
                    <option value="mezcal">Mezcal Tasting</option>
                    <option value="wine">Wine Tasting</option>
                    <option value="beer">Beer Tasting</option>
                  </select>
                </div>
              </section>
            )}
            {this.state.currentSection === 3 && (
              <section className="grid-x grid-margin-x">
                <center>
                  <h2>Where can we find you gigs?</h2>
                  <p>
                    This location determines where you appear in search results
                    and will determine your distance from the client’s event.
                    Want to serve more than one area? Don’t worry, you can add
                    and change locations later.
                  </p>
                </center>
                <div className="medium-12 cell">
                  <label htmlFor="">Location</label>
                  <input type="text" placeholder="City or Zip" />
                </div>
              </section>
            )}

            {this.state.currentSection === 4 && (
              <section className="grid-x grid-margin-x">
                <center>
                  <h2>What photo would you like to represent your service?</h2>
                  <p>
                    Your profile photo shows up prominently in search results,
                    at the top of your profile page, and in communication with
                    the client. Make it a good one.
                  </p>
                </center>
                <div className="medium-12 cell">
                  <label htmlFor="">Photo</label>
                  <input type="file" placeholder="City or Zip" />
                </div>
              </section>
            )}

            {this.state.currentSection === 5 && (
              <section className="grid-x grid-margin-x">
                <center>
                  <h2>How would you describe your act or service?</h2>
                  <p>
                    Summarize the services you offer and explain why the client
                    should book you for their event. This will show up
                    prominently at the top of your profile page.
                  </p>
                  <p>
                    Important: Your Portfolio may not contain email addresses,
                    website links, or phone numbers.
                  </p>
                </center>
                <div className="medium-12 cell">
                  <label htmlFor="">Description</label>
                  <textarea />
                </div>
              </section>
            )}

            {this.state.currentSection === 6 && (
              <section className="grid-x grid-margin-x">
                <center>
                  <h2>We just need a few more details.</h2>
                  <p>
                    None of this information will be revealed to clients – it’s
                    simply here for us to better serve you.
                  </p>
                </center>
                <div className="small-6 cell">
                  <label htmlFor="">Phone number</label>
                  <input type="text" />
                </div>
                <div className="small-6 cell">
                  <label htmlFor="">Cellphone number</label>
                  <input type="text" />
                </div>
                <div className="small-12 cell">
                  <label htmlFor="">
                    How did you hear about Taste Buddha? (Optional)
                  </label>
                  <input type="text" />
                </div>
                <div className="small-12 cell">
                  <input id="checkbox1" type="checkbox" />
                  <label htmlFor="checkbox1">
                    Receive text notifications for new leads, messages, and
                    booking updates Cell phone number
                  </label>
                </div>
              </section>
            )}

            {this.state.currentSection === 7 && (
              <section className="grid-x grid-margin-x">
                <ul className="pricing-table cell small-4">
                  <li className="title">Free</li>
                  <li className="price">Nothing</li>
                  <li className="description">An awesome description</li>
                  <li>42 Rad Features</li>
                  <li>7GB of Power</li>
                  <li>
                    <Link to="/join/verify" className="button expanded">
                      Choose Plan
                    </Link>
                  </li>
                </ul>
                <ul className="pricing-table cell small-4">
                  <li className="title">Pro</li>
                  <li className="price">$20</li>
                  <li className="description">An awesome description</li>
                  <li>42 Rad Features</li>
                  <li>7GB of Power</li>
                  <li>
                    <Link to="/join/verify" className="button expanded">
                      Choose Plan
                    </Link>
                  </li>
                </ul>
                <ul className="pricing-table cell small-4">
                  <li className="title">Featured</li>
                  <li className="price">$50</li>
                  <li className="description">An awesome description</li>
                  <li>42 Rad Features</li>
                  <li>7GB of Power</li>
                  <li>
                    <Link to="/join/verify" className="button expanded">
                      Choose Plan
                    </Link>
                  </li>
                </ul>
              </section>
            )}

            <div className="grid-x grid-padding-x buttons align-justify padding-1">
              {this.state.currentSection !== 1 ? (
                <a onClick={this.previousSection} className="button">
                  Prev
                </a>
              ) : (
                <div />
              )}
              {this.state.currentSection !== 7 && (
                <a onClick={this.nextSection} className="button">
                  Next
                </a>
              )}
              {this.state.currentSection === 7 && (
                <Link to="/join/verify" className="button">
                  Submit
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }

  nextSection = () => {
    const { currentSection } = this.state;
    this.setState({ currentSection: currentSection + 1 });
  };

  previousSection = () => {
    const { currentSection } = this.state;
    this.setState({ currentSection: currentSection - 1 });
  };
}
