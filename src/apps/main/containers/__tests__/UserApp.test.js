/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { UserApp } from "apps/main/containers/UserApp";

describe("apps/main/containers/UserApp", () => {
  it("renders without an issue", () => {
    const subject = <UserApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
