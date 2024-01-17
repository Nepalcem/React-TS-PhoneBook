import styled from "styled-components";
import { TextField } from "@mui/material";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTextField = styled(TextField)`
  .MuiInputLabel-root:not([data-shrink="true"]) {
    transform: translate(14px, 10px) scale(1);
    font-size: 14px;
  }
  & input {
    height: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  max-height: 38px;
  padding: 12px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 16px;
  background-color: rgb(81, 203, 238);
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
