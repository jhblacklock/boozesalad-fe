import React from "react";
import { shallow } from "enzyme";

import UserCard from "apps/main/components/UserCard";

describe("apps/main/components/UserCard", () => {
  it("renders without an issue", () => {
    const subject = <UserCard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
