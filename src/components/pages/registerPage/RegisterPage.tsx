import {FC}from "react";
import { ContentBlock } from "components/ContactLayout/ContactLayout.styled";
import SignupForm from "components/SignupForm/SignupForm";
import { useDispatch } from "react-redux";
import { register } from "redux/authorize/operations";
import AllreadyAccount from "components/AlreadyAccountBlock/AlreadyAccount";
import { IUserObject } from "components/App/App.types";

const  RegisterPage: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: IUserObject, actions: any) => {
    (dispatch as any)(register(values));
    actions.resetForm();
  };

  return (
    <ContentBlock>
      <h2>Please Register..</h2>
      <SignupForm isLogin={false} onSubmit={handleSubmit} />
      <AllreadyAccount isLogin={false} />
    </ContentBlock>
  );
}

export default RegisterPage;
