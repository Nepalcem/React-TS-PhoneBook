import { useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";

export const useAuthorize = () => {
  return {
    isLoggedIn: useSelector(selectors.getIsLoggedIn),
    isRefreshing: useSelector(selectors.getIsRefreshing),
    user: useSelector(selectors.getUser),
  };
};
