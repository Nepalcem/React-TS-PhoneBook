import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { tablet } from "utils/globalVariables";

export const LoginLink = styled(NavLink)`
  color: white;
  padding: 12px 9px;
  @media screen and (min-width: ${tablet}) {
    padding: 12px 16px;
  }
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  background-color: #89cff0;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  line-height: unset;
  transition: all 0.25s ease-in-out;
  & span {
    margin-left: 25px;
  }
  &:hover {
    background-color: rgb(81, 203, 238);
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
`;

export const RegisterIcon = styled(FaUserPlus)`
  position: absolute;
  margin-top: 3px;
`;

export const LoginIcon = styled(FaSignInAlt)`
  position: absolute;
  margin-top: 3px;
`;

export const LoginMenuDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
