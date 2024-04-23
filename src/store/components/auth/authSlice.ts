import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACCESSTOKEN_STORAGE, LANG_STORAGE, NAME_STORAGE } from "@utils/constants";

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
      state.userInfo = {};
      localStorage.removeItem(NAME_STORAGE);
      localStorage.removeItem(ACCESSTOKEN_STORAGE);
      localStorage.removeItem(LANG_STORAGE);
      window.location.href = "/login";
      // localStorage.clear();

    },
    setUserInfo: (state: IfAuth, action: PayloadAction) => {
      state.userInfo = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;
export const { userLogout, setUserInfo } = actions;
export default reducer;
