import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
