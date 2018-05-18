/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { CategoryApp } from "apps/main/containers/CategoryApp";

describe("apps/main/containers/CategoryApp", () => {
  it("renders without an issue", () => {
    const subject = <CategoryApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
