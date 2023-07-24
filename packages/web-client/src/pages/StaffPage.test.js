import React from "react";
import { shallow } from "enzyme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StaffPage from "./StaffPage";
import { setSelectedDay, fetchStaffData } from "../store/staffSlice";
import "../setupTests"

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../store/staffSlice", () => ({
  setSelectedDay: jest.fn(),
  fetchStaffData: jest.fn(),
}));

describe("StaffPage component", () => {
  let dispatchMock;
//   let useSelectorMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    // useSelectorMock = jest.fn();
    // useSelector.mockReturnValue("Tuesday");
  });

  it("renders the component correctly with no staff list", () => {
    useSelector.mockReturnValue("Tuesday"); // Simulate the selectedDay from the Redux store
    // useSelectorMock.mockReturnValueOnce({
    //   cooks: null, // Simulate an empty staffList for cooks
    // });

    const wrapper = shallow(<StaffPage staffType="cooks" />);
    expect(wrapper.find(".day-title").text()).toBe("Tuesday");
    expect(wrapper.find(".staff-list-item")).toHaveLength(0);
  });

  it("dispatches setSelectedDay with the first day when 'Next' is clicked on Monday", () => {
    useSelector.mockReturnValue("Monday");

    const wrapper = shallow(<StaffPage staffType="waiters" />);
    const nextButton = wrapper.find("button").at(3); // Select the 'Next' button

    nextButton.simulate("click");
    expect(dispatchMock).toHaveBeenCalledWith(setSelectedDay("Monday"));
  });


  // Test case to verify navigation links
  it("renders navigation links correctly", () => {
    const wrapper = shallow(<StaffPage staffType="waiters" />);
    const navigationButtons = wrapper.find(Link);

    expect(navigationButtons).toHaveLength(2);
    expect(navigationButtons.at(0).prop("to")).toBe("/Waiters");
    expect(navigationButtons.at(1).prop("to")).toBe("/Cooks");
  });

  // Test case to verify page title based on staffType prop
  it("renders the correct page title based on the staffType prop", () => {
    const wrapperCooks = shallow(<StaffPage staffType="cooks" />);
    const wrapperWaiters = shallow(<StaffPage staffType="waiters" />);

    expect(wrapperCooks.find(".page-title").text()).toBe("Cooks");
    expect(wrapperWaiters.find(".page-title").text()).toBe("Waiters");
  });
});
