import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  _id: "",
  firstname: "",
  lastname: "",
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      const {_id,firstname,lastname,email} = action.payload.data;
      state._id = _id;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstname = "";
      state.lastname = "";
      state.email = "";
    },
    userRedux: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loginRedux, logoutRedux, userRedux } = userSlice.actions;

export default userSlice.reducer;
