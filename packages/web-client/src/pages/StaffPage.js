import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDay, fetchStaffData } from '../store/staffSlice';
import { Link } from "react-router-dom";

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
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const currentDayIndex = daysOfWeek.indexOf(selectedDay);
    const nextDayIndex = currentDayIndex + 1;
    if (nextDayIndex < daysOfWeek.length) {
      dispatch(setSelectedDay(daysOfWeek[nextDayIndex]));
    }
  };

  const handlePrevDay = () => {
    // Implement the logic to handle the "Prev" button click and disable it on Monday
    // For simplicity, let's assume the days are in a fixed order
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const currentDayIndex = daysOfWeek.indexOf(selectedDay);
    const prevDayIndex = currentDayIndex - 1;
    if (prevDayIndex >= 0) {
      dispatch(setSelectedDay(daysOfWeek[prevDayIndex]));
    }
  };

  return (
    <div>
    
    <Link to="/waiters">
        <button>Waiters</button>
      </Link>
      <Link to="/cooks">
        <button>Cooks</button>
      </Link>
      <h1>{staffType === 'cooks' ? 'Cooks' : 'Waiters'}</h1>
      <h2>{selectedDay}</h2>
      {staffList && staffList[staffType] &&
      <ul>
        {staffList[staffType].map((staff, index) => (
          <li key={index}>{staff}</li>
        ))}
      </ul>}
      <button onClick={handlePrevDay} disabled={selectedDay === 'Monday'}>
        Prev
      </button>
      <button onClick={handleNextDay} disabled={selectedDay === 'Friday'}>
        Next
      </button>
    </div>
  );
};

export default StaffPage;
