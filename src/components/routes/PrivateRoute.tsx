import { useAuthorize } from "components/hooks/useAuthorize";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PrivateProps {
  component: React.FC;
  redirectTo: string;
}

const PrivateRoute: FC<PrivateProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuthorize();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;