import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay, fetchStaffData } from "../store/staffSlice";
import { Link } from "react-router-dom";
import "../styles.css"; // Import the CSS file

const StaffPage = ({ staffType }) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.staff.selectedDay);
  const staffList = useSelector((state) => state.staff.staffList);

  useEffect(() => {
    dispatch(fetchStaffData(staffType, selectedDay));
  }, [dispatch, staffType, selectedDay]);

  const handleNextDay = () => {
    // Implement the logic to handle the "Next" button click and disable it on Friday
    // For simplicity, let's assume the days are in a fixed order
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const currentDayIndex = daysOfWeek.indexOf(selectedDay);
    const nextDayIndex = currentDayIndex + 1;
    if (nextDayIndex < daysOfWeek.length) {
      dispatch(setSelectedDay(daysOfWeek[nextDayIndex]));
    }
  };

  const handlePrevDay = () => {
    // Implement the logic to handle the "Prev" button click and disable it on Monday
    // For simplicity, let's assume the days are in a fixed order
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const currentDayIndex = daysOfWeek.indexOf(selectedDay);
    const prevDayIndex = currentDayIndex - 1;
    if (prevDayIndex >= 0) {
      dispatch(setSelectedDay(daysOfWeek[prevDayIndex]));
    }
  };

  return (
    <div className="container">
      <div className="navigation-buttons-container">
        <Link to="/Waiters" className="navigation-button">
          <button className="link-button">Waiters</button>
        </Link>
        <Link to="/Cooks" className="navigation-button">
          <button className="link-button">Cooks</button>
        </Link>
      </div>
      <h1 className="page-title">
        {staffType === "cooks" ? "Cooks" : "Waiters"}
      </h1>
      <h2 className="day-title">{selectedDay}</h2>
      {staffList && staffList[staffType] && (
        <ul className="staff-list">
          {staffList[staffType].map((staff, index) => (
            <li key={index} className="staff-list-item">
              {staff}
            </li>
          ))}
        </ul>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrevDay} disabled={selectedDay === "Monday"}>
          Prev
        </button>
        <button onClick={handleNextDay} disabled={selectedDay === "Friday"}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StaffPage;
