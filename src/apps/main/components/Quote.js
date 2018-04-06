/* @flow */
import React from "react";
import "./Quote.scss";
import DatePicker from "react-datepicker";
import moment from "moment";

type State = {
  currentSection: numbers,
};

export default class Quote extends React.PureComponent {
  state: State = {
    currentSection: 1,
  };

  render() {
    return (
      <div>
        <div className="width-100 text-center">
          <h1 className="separator-center">Let's Get Started.</h1>
          <p>
            Answer the following questions and we'll send your quote to the
            right Enthusiast.
          </p>
        </div>
        <div className="grid-x grid-padding-x align-center padding-2">
          <form className="multi-form width-100" action="#" method="POST">
            {this.state.currentSection === 1 && (
              <section className="grid-x grid-margin-x">
                <div className="medium-6 cell">
                  <label htmlFor="">
                    What type of Enthusist are you looking for?
                    <select>
                      <option value="whiskey">Whiskey Tasting</option>
                      <option value="mezcal">Mezcal Tasting</option>
                      <option value="wine">Wine Tasting</option>
                      <option value="beer">Beer Tasting</option>
                    </select>
                  </label>
                </div>
                <div className="medium-6 cell">
                  <label htmlFor="">How many people are you expecting?</label>
                  <input type="number" />
                </div>
              </section>
            )}
            {this.state.currentSection === 2 && (
              <section className="grid-x grid-margin-x">
                <div className="medium-6 cell">
                  <label htmlFor="">When is you event?</label>
                  <DatePicker
                    className="width-100"
                    selected={moment()}
                    onChange={() => {}}
                  />
                </div>
                <div className="medium-6 cell">
                  <label htmlFor="">Is your date flexible?</label>
                  <input type="radio" name="flexible" value="Yes" required />
                  <label>Yes</label>
                  <input type="radio" name="flexible" value="No" />
                  <label>No</label>
                </div>
                <div className="medium-6 cell">
                  <label htmlFor="">
                    What time will your event start?
                    <select>
                      <option value="12:00">12:00 AM (midnight)</option>
                      <option value="12:30">12:30 AM</option>
                      <option value="1:00">1:00 AM</option>
                    </select>
                  </label>
                </div>
                <div className="medium-6 cell">
                  <label htmlFor="">
                    For how long?
                    <select>
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="180">3 hours</option>
                      <option value="240">4 hours</option>
                      <option value="300">5 hours</option>
                    </select>
                  </label>
                </div>
              </section>
            )}

            {this.state.currentSection === 3 && (
              <section className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label htmlFor="">
                    What is the address/venue name for your event?
                  </label>
                  <input type="text" />
                </div>
                <div className="medium-6 cell">
                  <label htmlFor="">
                    What is the City your event is taking place?
                  </label>
                  <input type="text" />
                </div>
              </section>
            )}

            {this.state.currentSection === 4 && (
              <section className="grid-x grid-margin-x">
                <div className="small-12 cell">
                  <label htmlFor="">
                    Is there anything else you'd like the Enthusiast to know?
                  </label>
                  <textarea />
                </div>
              </section>
            )}

            {this.state.currentSection === 5 && (
              <section className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label htmlFor="">What is your First and Last Name?</label>
                  <input type="text" />
                </div>
                <div className="small-6 cell">
                  <label htmlFor="">Your Email Address</label>
                  <input type="text" />
                </div>
                <div className="small-6 cell">
                  <label htmlFor="">Your phone number (optional)</label>
                  <input type="text" />
                  <p className="help-text">
                    Accepting phone calls from vendors will make the quoting and
                    booking process faster and easier!
                  </p>
                </div>
                <div className="small-6 cell">
                  <label htmlFor="">Receive Text Messages?</label>
                  <input type="radio" name="flexible" value="Yes" required />
                  <label>Yes</label>
                  <input type="radio" name="flexible" value="No" />
                  <label>No</label>
                  <p className="help-text">
                    Texts are sent when you receive a new quote, message, or
                    booking confirmation. You can update your preferences at any
                    time through your control panel.
                  </p>
                </div>
              </section>
            )}

            {this.state.currentSection === 6 && (
              <section className="grid-x grid-margin-x">
                <div className="small-6 cell">
                  <label htmlFor="">Create a login password</label>
                  <input type="text" />
                  <p className="help-text">
                    Or, enter your password if you have an account.
                  </p>
                </div>
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
              {this.state.currentSection !== 6 && (
                <a onClick={this.nextSection} className="button">
                  Next
                </a>
              )}
              {this.state.currentSection === 6 && (
                <button className="button">Submit</button>
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
