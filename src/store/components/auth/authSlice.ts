import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IfAuth {
  userInfo: any;
  accessToken: any;
}

const initialState: IfAuth = {
  userInfo: {},
  accessToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLogout: (state: IfAuth, action: PayloadAction) => {
      state.accessToken = "";
      window.location.href = "/login";

      localStorage.clear();
    },
    setUserInfo: (state: IfAuth, action: PayloadAction) => {
      state.userInfo = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;
export const { userLogout, setUserInfo } = actions;
export default reducer;
