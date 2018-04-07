/* @flow */
import React from "react";
import { Link } from "react-router";
import { Icon } from "react-foundation";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSection from "./PortfolioSection";
import Box from "./Box";
import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2018, 3, 0),
    end: new Date(2018, 3, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2018, 3, 7),
    end: new Date(2018, 3, 10),
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2018, 3, 9, 0, 0, 0),
    end: new Date(2018, 3, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2018, 3, 11),
    end: new Date(2018, 3, 13),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2018, 3, 12, 10, 30, 0, 0),
    end: new Date(2018, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2018, 3, 12, 12, 0, 0, 0),
    end: new Date(2018, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2018, 3, 12, 14, 0, 0, 0),
    end: new Date(2018, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2018, 3, 12, 17, 0, 0, 0),
    end: new Date(2018, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2018, 3, 12, 20, 0, 0, 0),
    end: new Date(2018, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2018, 3, 13, 7, 0, 0),
    end: new Date(2018, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2018, 3, 17, 19, 30, 0),
    end: new Date(2018, 3, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2018, 3, 20, 19, 30, 0),
    end: new Date(2018, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
];

export default class PortfolioCalendar extends React.PureComponent {
  render() {
    const allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k],
    );
    return (
      <Box>
        <PortfolioHeader>
          <h4 className="cell auto">Calendar</h4>
          <Link to="/william" className="cell small-3 text-right">
            View Portfolio
          </Link>
        </PortfolioHeader>
        <div className="padding-1">
          <section className="border-bottom padding-vertical-1">
            <h2>Organize.</h2>
            <p>
              Including calendar dates gives prospective buyers an idea of the
              types of gigs you typically play. Events you book on Taste Buddha
              are automatically added to your calendar.
            </p>
          </section>
          <PortfolioSection>
            <div className="cell auto">
              <BigCalendar
                style={{ minHeight: 500 }}
                events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                defaultDate={new Date(2018, 3, 1)}
              />
            </div>
          </PortfolioSection>
          <section className="grid-x grid-padding-x buttons align-right padding-1">
            <Link to="portfolio/categories" className="button">
              Next
            </Link>
          </section>
        </div>
      </Box>
    );
  }
}
