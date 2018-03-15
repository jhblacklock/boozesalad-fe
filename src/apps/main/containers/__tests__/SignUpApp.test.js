/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { SignUpApp } from "apps/main/containers/SignUpApp";

describe("apps/main/containers/SignUpApp", () => {
  it("renders without an issue", () => {
    const subject = <SignUpApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
