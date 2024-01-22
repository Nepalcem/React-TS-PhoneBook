import { useAuthorize } from "components/hooks/useAuthorize";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface RestrictedProps {
  component: React.FC;
  redirectTo: string;
}

const RestrictedRoute: FC<RestrictedProps> = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuthorize();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute