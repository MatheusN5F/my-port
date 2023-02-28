import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

export const Icon = styled(AiOutlineMail)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  position: relative;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0em;
  margin: 0.5em;
  border-bottom: 1px solid #ccc;
  gap: 2em;
  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0em;
    gap: 3em;
    color: #ccc;
  }
  & nav > ul > li {
    display: inline-flex;
    padding: 0.5em;
  }
  & nav > ul > li > p {
    position: relative;
    bottom: -0.2em;
  }
  & nav > ul > li > a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  & Img {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0em;
    gap: 1em;
    height: 2em;
    cursor: pointer;
  }
  & .fixed {
    color: #9d4edd;
  }
`;
