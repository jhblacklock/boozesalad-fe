import React from "react";
import { shallow } from "enzyme";

import NewsCard from "apps/main/components/portfolio/NewsCard";

describe("apps/main/components/portfolio/NewsCard", () => {
  it("renders without an issue", () => {
    const subject = <NewsCard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
