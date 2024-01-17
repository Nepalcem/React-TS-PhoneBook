import { RootState } from "redux/store";

export const getIsLoggedIn = (state: RootState) => state.authorize.isLoggedIn;
export const getUser = (state: RootState) => state.authorize.user;
export const getIsRefreshing = (state: RootState) =>
  state.authorize.isRefreshing;
