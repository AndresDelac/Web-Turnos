import { createSlice} from "@reduxjs/toolkit";
import { updateAppointment as cancelAppointment} from "../helpers/peticions";


const initialState = {
  userId: 0,
  appointments: [],
  isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
        initialState,
        reducers: {
          setUserId: (state, action) => {
            state.userId = action.payload;
          },
          updateAppointments: (state, action) => {
            state.appointments = action.payload;
          },

          cancelAppointments: (state, action) => {
            console.log(state.appointments);
            state.appointments = state.appointments;
        },
        resetState(state) {
          state = { ...initialState };
        }
        

        },
      });
      
  export const { setUserId, updateAppointments, resetState, cancelAppointments } = userSlice.actions;
  export default userSlice.reducer;