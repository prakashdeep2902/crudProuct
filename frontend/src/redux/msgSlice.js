import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
  isMsgShow: false,
};

const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    showMsg: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isMsgShow = true;
    },
  },
});

export const { showMsg } = msgSlice.actions;

export default msgSlice.reducer;
