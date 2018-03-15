/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { QuoteApp } from "apps/main/containers/QuoteApp";

describe("apps/main/containers/QuoteApp", () => {
  it("renders without an issue", () => {
    const subject = <QuoteApp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
