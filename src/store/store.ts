import {
  configureStore,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";
import dialogReducer from "./components/customDialog/dialogSlice";
import toastReducer from "./components/customDialog/toastSlice";
import { ordersApi } from "./components/orders/ordersApi";
import { authApi } from "./components/auth/authApi";
import authReducer, { userLogout } from "./components/auth/authSlice";
import productsReducer from "./components/products/productsSlice";
import { productsApi } from "./components/products/productsApi";
import { thudungGiosApi } from "./components/thudungGios/thudungGiosApi";
import thudungGiosReducer from "./components/thudungGios/thudungGiosSlice";
/*import authReducer, { userLogout } from "../pages/Auth/authSlice";
import modalReducer from "../components/customModal/modalSlice";
import { memberApi } from "../pages/MemberManagement/memberApi";
import { settlementApi } from "../pages/SettlementManagement/settlementApi";
import { dispatchApi } from "../pages/DispatchManagement/dispatchApi";
import { notificationApi } from "../pages/NoticeManagement/notificationApi";
import { faqApi } from "../pages/FaqManagement/faqApi";
import { advertisementApi } from "../pages/AdvertisementManagement/advertisementApi"; */
const rootReducer = {
  [thudungGiosApi.reducerPath]: thudungGiosApi.reducer,
  thudungGiosReducer: thudungGiosReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  productsReducer: productsReducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  /*  [memberApi.reducerPath]: memberApi.reducer,
  [settlementApi.reducerPath]: settlementApi.reducer,
  [dispatchApi.reducerPath]: dispatchApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [faqApi.reducerPath]: faqApi.reducer,
  [advertisementApi.reducerPath]: advertisementApi.reducer,
  modal: modalReducer,
   */
  dialog: dialogReducer,
  toastR: toastReducer,
};
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      /*       console.log("rtkQueryErrorLogger", action);
       */ // unauthorized
      if (action.payload.status === 401) {
        console.log("rtkQueryErrorLogger");
        // api.dispatch(userLogout());
        // window.location.href = "/login";
      }
    }
    return next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      rtkQueryErrorLogger,
      ordersApi.middleware,
      productsApi.middleware,
      authApi.middleware,
      thudungGiosApi.middleware,
      /*   settlementApi.middleware,
      dispatchApi.middleware,
      notificationApi.middleware,
      faqApi.middleware,
      advertisementApi.middleware, */
    ]),
});

export default store;
