import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SellerToken: localStorage.getItem("sellerToken") || null,
  SellerInfo: localStorage.getItem("sellerInfo") || null,
};

const SellerAuthSlice = createSlice({
  name: "SellerAuth",
  initialState,
  reducers: {
    loginSellerSucess: (state, action) => {
      state.SellerInfo = action.payload.user;
      state.SellerToken = action.payload.Token;
      localStorage.setItem("sellerInfo", JSON.stringify(action.payload.user));
      localStorage.setItem("sellerToken", action.payload.Token);
    },

    logOutSeller: (state, action) => {
      state.SellerInfo = null;
      state.SellerToken = null;
      localStorage.removeItem("sellerInfo");
      localStorage.removeItem("sellerToken");
    },
  },
});

export const { loginSellerSucess, logOutSeller } = SellerAuthSlice.actions;

export default SellerAuthSlice.reducer;
