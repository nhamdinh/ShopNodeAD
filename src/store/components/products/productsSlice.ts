import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IfProducts {
  dataProducts: any[];
  userChatNotices: any[];
  categories: any[];
}

const initialState: IfProducts = {
  categories: [],
  dataProducts: [],
  userChatNotices: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setStoCategories: (state: IfProducts, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },
    setStoProducts: (state: IfProducts, action: PayloadAction<any>) => {
      state.dataProducts = action.payload;
    },
    setStoChatNotices: (state: IfProducts, action: PayloadAction<any>) => {
      state.userChatNotices = action.payload;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { setStoProducts, setStoCategories, setStoChatNotices } = actions;
export default reducer;
