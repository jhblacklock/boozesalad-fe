/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { JoinApp } from "apps/main/containers/JoinApp";

describe("apps/main/containers/JoinApp", () => {
  it("renders without an issue", () => {
    const subject = <JoinApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
