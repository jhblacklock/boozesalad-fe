/* @flow */
import React from "react";
import { Link } from "react-router";
import UserCard from "./UserCard";

export default class Sidebar extends React.PureComponent {
  render() {
    return (
      <div>
        <UserCard />
        <ul className="vertical menu">
          <li>
            <Link to="/portfolio/start">Start</Link>
          </li>
          <li>
            <Link to="/portfolio/basic-info">Basic Info</Link>
          </li>
          <li>
            <Link to="/portfolio/categories">Categories</Link>
          </li>
          <li>
            <Link to="/portfolio/menus">Menus</Link>
          </li>
          <li>
            <Link to="/portfolio/photos">Photos</Link>
          </li>
          <li>
            <Link to="/portfolio/videos">Videos</Link>
          </li>
          <li>
            <Link to="/portfolio/details">Details</Link>
          </li>
          <li>
            <Link to="/portfolio/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/portfolio/booking-terms">Booking Terms</Link>
          </li>
        </ul>
      </div>
    );
  }
}
