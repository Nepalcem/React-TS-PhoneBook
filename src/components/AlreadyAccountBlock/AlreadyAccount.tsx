import { FC } from "react";
import { AllreadyStyledBlock } from "./AllreadyAccount.styled";
import { StyledLoginLink } from "components/pages/Home/HomeContent/HomeContent.styled";


const AllreadyAccount: FC<{ isLogin: boolean }> = ({ isLogin }) => {
  return (
    <>
      {isLogin ? (
        <AllreadyStyledBlock>
          Don't have an account?{" "}
          <StyledLoginLink to="/register">Register</StyledLoginLink> here.
        </AllreadyStyledBlock>
      ) : (
        <AllreadyStyledBlock>
          Already registered?{" "}
          <StyledLoginLink to="/login">Login</StyledLoginLink> here.
        </AllreadyStyledBlock>
      )}
    </>
  );
};

export default AllreadyAccount;