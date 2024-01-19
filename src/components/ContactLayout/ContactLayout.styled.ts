import styled from "styled-components";
import { brownAccent } from "utils/globalVariables";

export const ContentBlock = styled.div`
  min-width: 248px;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  & h1,
  h2 {
    color: ${brownAccent};
  }
`;
