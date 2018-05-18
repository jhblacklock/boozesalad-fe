/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { SearchApp } from "apps/main/containers/SearchApp";

describe("apps/main/containers/SearchApp", () => {
  it("renders without an issue", () => {
    const subject = <SearchApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
