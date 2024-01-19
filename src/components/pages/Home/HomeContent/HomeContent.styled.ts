import styled from "styled-components";
import { desktop, mainBlueAccent } from "utils/globalVariables";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { FaLock } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from "react-router-dom";

export const StyledHomeImg = styled.img`
  height: auto;
  max-width: 100%;
  @media screen and (min-width: ${desktop}) {
    max-width: 50%;
  }
  display: inline-block;
  border-radius: 8px;
`;

export const StyledHomeText = styled.div`
  text-align: justify;
  @media screen and (min-width: ${desktop}) {
    max-width: 50%;
  }
  text-indent: 15px;
`;

export const StyledHomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
  }
  gap: 15px;
  margin-bottom: 20px;
`;

export const StyledHomeList = styled.ul`
  list-style: none;
`;

export const StyledHomeListItem = styled.li`
  margin-bottom: 5px;
`;

export const StyledHomePhoneIcon = styled(FaPhoneVolume)`
  color: #800020;
`;

export const StyledHomeGlobeIcon = styled(SlGlobe)`
  color: ${mainBlueAccent};
`;

export const StyledHomeLockIcon = styled(FaLock)`
  color: #ffc300;
`;

export const StyledHomeSearchIcon = styled(FcSearch)``;
export const StyledHomeAccessIcon = styled(FcPhoneAndroid)``;

export const StyledLoginLink = styled(Link)`
  font-weight: 500;
  color: #800020;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${mainBlueAccent};
  }
`;
