import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/authorize/operations";
import { ContentBlock } from "components/ContactLayout/ContactLayout.styled";
import SignupForm from "components/SignupForm/SignupForm";
import AllreadyAccount from "components/AlreadyAccountBlock/AlreadyAccount";
import { IUserObject } from "components/App/App.types";
import { AppDispatch } from "redux/store";

function LoginPage() {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IUserObject, actions: any) => {
    const { email, password } = values;
    const loginDataObject = { email, password };
    dispatch(logIn(loginDataObject));
  };
  return (
    <ContentBlock>
      <h2>Login to your Account</h2>
      <SignupForm isLogin={true} onSubmit={handleSubmit} />
      <AllreadyAccount isLogin={true} />
    </ContentBlock>
  );
}

export default LoginPage;
