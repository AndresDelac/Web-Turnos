import { createSlice, createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const initialState = {
  user: [],
  appointments: [],
  isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
        initialState,
        reducers: {
          addUser: (state, action) => {
            state.user = {...action.payload};
          },
          addAppointment: (state, action) => {
            state.appointments.push(action.payload);
          },

          setLoggedInUser: (state, action) => {
            state.isLoggedIn = action.payload;
        }

        },
      });
      
export const { addUser, addAppointment, setLoggedInUser } = userSlice.actions;

export const selectUserAppointments = createSelector(
    (state) => state.user.appointments,
    (appointments) => appointments
  );
  
  export default userSlice.reducer;