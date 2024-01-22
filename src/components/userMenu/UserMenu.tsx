import { useAuthorize } from "components/hooks/useAuthorize";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/authorize/operations";
import { UserGreetingText, LogOutButton, UserMenuDiv } from "./UserMenu.styled";
import { FiLogOut } from "react-icons/fi";
import { AppDispatch } from "redux/store";

function UserMenu() {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const { user } = useAuthorize();

  const handleLogout = () => dispatch(logOut());

  return (
    <UserMenuDiv>
      <UserGreetingText>Hi, {user.name}</UserGreetingText>
      <LogOutButton type="button" onClick={handleLogout}>
        <FiLogOut /> LOGOUT
      </LogOutButton>
    </UserMenuDiv>
  );
}

export default UserMenu;
