import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {
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
      const { _id, firstname, lastname, email } = action.payload.data;
      state._id = _id;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;

      localStorage.setItem("user", JSON.stringify(state));
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstname = "";
      state.lastname = "";
      state.email = "";

      localStorage.removeItem("user");
    },
    userRedux: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loginRedux, logoutRedux, userRedux } = userSlice.actions;

export default userSlice.reducer;
