import styled from "styled-components";
import { tablet } from "utils/globalVariables";

export const FilterStyled = styled.form`
  & label {
    display: flex;
    gap: 20px;
    align-items: baseline;
    font-weight: 500;
  }
  & input {
    max-width: 150px;
    transition: all 0.3s ease-in-out;
    outline: none;
    padding: 9px;
    border: 1px solid #dddddd;
    border-radius: 3px;
    height: 18px;
  }
  & input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 9px;
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const FilterBlock = styled.div`
  @media screen and (max-width: ${tablet}) {
    & h2 {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;