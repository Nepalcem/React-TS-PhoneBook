import React, { lazy, useEffect } from "react";
import { SharedHeaderLayout } from "components/pages/sharedHeaderLayout/sharedHeaderLayout";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from "../../redux/authorize/operations";
import { useAuthorize } from "components/hooks/useAuthorize";
import PrivateRoute from "components/routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import RestrictedRoute from "components/routes/RestrictedRoute";
import type { AppDispatch } from "redux/store";

const HomePage = lazy(() => import("components/pages/Home/Home"));
const RegisterPage = lazy(() => import("components/pages/registerPage/RegisterPage"));
const LoginPage = lazy(() => import("components/pages/loginPage/LoginPage"));
const ContactsPage = lazy(() => import("components/pages/ContactsPage"));

const App = (): React.ReactElement => {
  const { isRefreshing } = useAuthorize();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <ToastContainer autoClose={5000} theme="colored" />
          <Routes>
            <Route path="/" element={<SharedHeaderLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={RegisterPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute component={ContactsPage} redirectTo="/login" />
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
