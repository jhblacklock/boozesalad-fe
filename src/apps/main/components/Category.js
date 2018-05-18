/* @flow */
import React from "react";
import { Link } from "react-router";
import Testimonials from "./Testimonials";
import Featured from "./Featured";

export default class Category extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="hero-section grid-x"
          style={{
            backgroundImage:
              "url(https://static.pexels.com/photos/248064/pexels-photo-248064.jpeg)",
          }}
        >
          <div className="cell medium-4 text-left background-primary color-white padding-3">
            <h1>Whiskey Tastings Near You</h1>
            <p>
              Find a local whiskey Enthusiast to share their taste preferences
              with you and your guests.
            </p>
          </div>
        </div>
        <div className="cell medium-12 text-left background-light padding-3">
          <h2>Where do you need a Whiskey Enthusiast?</h2>
          <div className="buttons">
            {[
              "Austin",
              "Bastrop",
              "Pfluggerville",
              "Round Rock",
              "Buda",
              "San Antonio",
            ].map(button => (
              <Link
                to="c/Whiskey-Tasting/TX/Austin"
                key={button}
                className="button margin-right-1"
              >
                {button}
              </Link>
            ))}
            <input
              className="input-group-field"
              style={{ maxWidth: 300 }}
              type="text"
              placeholder="Find a City"
            />
          </div>
        </div>
        <div className="grid-container padding-1">
          <div className="grid-x">
            <div className="cell medium-12">
              <h1 className="separator-left">
                About booking Whiskey Enthusiasts
              </h1>
              <p>
                Whiskey Enthusiasts have a knack for fascinating people of all
                ages. Whether you’re planning a community event, children’s
                party, or festival, these professionals provide the strolling
                entertainment you need to keep your guests excited! The price
                for balloon twisting services will depend on various factors
                like the number of guests (as well as the number of balloons
                each guest receives), requests for specific balloon characters
                and art, and any associated travel costs. Many professional
                balloon artists offer party packages with even more
                entertainment, so be sure to look at all your options. Contact
                local entertainers to compare quotes that are customized for
                your event! Start by searching online for professionals in your
                area. Most balloon twisters have online profiles to show what
                they offer. Check out service descriptions and photos, and look
                for a professional with experience in events like yours. If
                possible, read through their reviews or testimonials. This is a
                great way to see how happy they’ve made their past clients! When
                you’re ready to contact a balloon twister for their rates and
                availability, make sure to give them as much information about
                your event as possible. Discuss important details like event
                location, number of expected guests, age range, length of
                performance, and any unique aspect of your event. The more info
                you give, the easier it is for them to provide a customized
                quote! This is also a good time to inquire about specifics. If
                you're expecting a large group of kids, ask the professional how
                many balloons they twist per hour. If you're planning a smaller
                kids party, ask the balloon twister if they offer more elaborate
                creations or balloon art to fit the party theme. You’ll likely
                find balloon twisters who offer additional services like face
                painting or magic, so inquire about their other talents. Once
                you’ve nailed down the details, make sure to confirm the
                agreement in writing. When you use GigSalad, the process is
                simple! Browse profiles, get free quotes, and book a balloon
                twister with the added security of our Worry-Free Guarantee. Get
                ready for some amazing balloon creations!
              </p>
            </div>
          </div>
          <Testimonials />
          <Featured />
        </div>
      </div>
    );
  }
}
