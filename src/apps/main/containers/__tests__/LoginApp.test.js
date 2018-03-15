/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { LoginApp } from "apps/main/containers/LoginApp";

describe("apps/main/containers/LoginApp", () => {
  it("renders without an issue", () => {
    const subject = <LoginApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
