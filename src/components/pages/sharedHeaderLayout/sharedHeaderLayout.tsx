import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  NavigationLink,
  StyledNav,
} from "./sharedHeaderLayout.styled";
import { Suspense } from "react";
import { useAuthorize } from "components/hooks/useAuthorize";
import UserMenu from "components/userMenu/UserMenu";
import LoginMenu from "components/loginMenu/LoginMenu";
import Footer from "components/Footer/Footer";

export const SharedHeaderLayout = () => {
  const { isLoggedIn } = useAuthorize();
  const showLoginMenu = !isLoggedIn;

  return (
    <Container>
      <Header>
        <StyledNav alignItemsBaseline={showLoginMenu}>
          <NavigationLink to="/">Home</NavigationLink>
          {isLoggedIn && (
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          )}
          {isLoggedIn ? <UserMenu /> : <LoginMenu />}
        </StyledNav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
