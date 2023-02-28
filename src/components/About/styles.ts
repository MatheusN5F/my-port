import styled from "styled-components";

export const Aboutme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5em;
  gap: 1em;
  background-color: #09090a; 
  & h1 {
    color: white;
    display: flex;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }
  & p {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ccc;
  }
`;
