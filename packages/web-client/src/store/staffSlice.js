// staffSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selectedDay: 'Monday',
  staffList: [],
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    setStaffList: (state, action) => {
      state.staffList = action.payload;
    },
  },
});

export const { setSelectedDay, setStaffList } = staffSlice.actions;

export const fetchStaffData = (staffType, selectedDay) => async (dispatch) => {
  const BASE_API_URL = 'http://localhost:3000'; // Replace this with your Fastify backend URL
  try {
    const response = await axios.get(`${BASE_API_URL}/${staffType}/${selectedDay}`);
    dispatch(setStaffList(response.data));
  } catch (error) {
    console.error('Error fetching staff data:', error);
  }
};

export default staffSlice.reducer;
