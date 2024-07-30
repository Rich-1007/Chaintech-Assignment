import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "cart",
  initialState: {
    userData: {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      number: "",
      city: "",
      state: "",
      country: "",
    },
  },
  reducers: {
    register: (state, action) => {
      state.userData = action.payload;

      //   state.cartItems.push(action.payload);
    },
  },
});

export const { register } = ProfileSlice.actions;
export default ProfileSlice.reducer;
