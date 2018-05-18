/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { CategoryWithLocationApp } from "apps/main/containers/CategoryWithLocationApp";

describe("apps/main/containers/CategoryWithLocationApp", () => {
  it("renders without an issue", () => {
    const subject = <CategoryWithLocationApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
