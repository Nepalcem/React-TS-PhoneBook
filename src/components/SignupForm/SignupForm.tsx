import {FC} from "react";
import * as Yup from "yup";
import {
  RegisterForm,
  FormTextField,
  FormButton,
  ErrorMessageStyled,
} from "./SignupForm.styled";
import { useFormik } from "formik";
import { IUserObject } from "components/App/App.types";

interface SignupFormProps {
  isLogin: boolean;
  onSubmit: (values: IUserObject, actions: any) => void;
}

const SignupForm: FC<SignupFormProps> = ({ isLogin, onSubmit })  => {
  const initialFormValues = isLogin
    ? {
        email: "testphonebook@test.com",
        password: "qwerty1",
      }
    : {
        name: "",
        email: "",
        password: "",
      };

  const validationSchema = isLogin
    ? Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(7, "Must be at least 7 characters")
          .required("Required"),
      })
    : Yup.object({
        name: Yup.string()
          .min(5, "Must be at least 5 characters")
          .max(12, "Must contain no longer than 12 characters")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(7, "Must be at least 7 characters")
          .required("Required"),
      });

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values, actions);
    },
  });

  return (
    <RegisterForm onSubmit={formik.handleSubmit}>
      {!isLogin && (
        <>
          <FormTextField
            type="text"
            id="name"
            name="name"
            label="Username"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessageStyled>{formik.errors.name}</ErrorMessageStyled>
          ) : null}
        </>
      )}

      <>
        <FormTextField
          type="email"
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
        ) : null}
      </>
      <>
        <FormTextField
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
        ) : null}
      </>
      <FormButton type="submit">{isLogin ? "Login" : "Register"}</FormButton>
    </RegisterForm>
  );
}

export default SignupForm;