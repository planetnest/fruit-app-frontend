import { shallow } from "enzyme";
import React from "react";
import Index from "../../../pages/index";

describe("Index Page", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
