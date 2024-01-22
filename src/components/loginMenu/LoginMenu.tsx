import { RegisterIcon, LoginIcon, LoginMenuDiv } from "./LoginMenu.styled";
import { LoginLink } from "./LoginMenu.styled";

function LoginMenu() {
  return (
    <LoginMenuDiv>
      <LoginLink to="/register">
        <RegisterIcon /> <span>Register</span>
      </LoginLink>
      <LoginLink to="/login">
        <LoginIcon /> <span>Log In</span>
      </LoginLink>
    </LoginMenuDiv>
  );
}

export default LoginMenu;
