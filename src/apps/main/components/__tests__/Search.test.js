import React from "react";
import { shallow } from "enzyme";

import Search from "apps/main/components/Search";

describe("apps/main/components/Search", () => {
  it("renders without an issue", () => {
    const subject = <Search />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
