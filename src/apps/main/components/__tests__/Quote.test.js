import React from "react";
import { shallow } from "enzyme";

import Quote from "apps/main/components/Quote";

describe("apps/main/components/Quote", () => {
  it("renders without an issue", () => {
    const subject = <Quote />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
