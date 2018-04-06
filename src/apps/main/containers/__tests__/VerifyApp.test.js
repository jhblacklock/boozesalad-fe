/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { VerifyApp } from "apps/main/containers/VerifyApp";

describe("apps/main/containers/VerifyApp", () => {
  it("renders without an issue", () => {
    const subject = <VerifyApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
