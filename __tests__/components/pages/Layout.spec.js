import { shallow } from "enzyme";
import React from "react";
import Layout from "../../../components/Layout";

describe("Layout Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
