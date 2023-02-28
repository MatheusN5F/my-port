import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


export const IconGIT = styled(AiFillGithub)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const IconLinkd = styled(AiOutlineLinkedin)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const IconYt = styled(AiOutlineYoutube)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const IconInsta = styled(AiOutlineInstagram)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const IconTwitt = styled(AiOutlineTwitter)`
  color: #9d4edd;
  font-size: 1.3em;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const HeroStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3em;
  gap: 3em;
  margin-bottom: 6em;
  & .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    gap: 1em;
  }
  & .about > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.3em;
    color: white;
  }
  & .about > p {
    line-height: 1.2em;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;

    /* Preto/100% */

    color: #ccc;
  }
  & .links,
  span {
    color: #9d4edd;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0em;
    gap: 0.5em;
  }
  img {
    width: 20em;
    height: 20em;
    border-radius: 50%;
  }
  .imgdiv  {
    background-color: #9d4edd;
    width: 20.5em;
    height: 20em;
    border-radius: 50%;

  }
  & strong {
    font-weight: bold;
  }
  & em {
    color: #9d4edd;
    text-decoration: underline;
    font-weight: bold;
    font-style: italic;
  }
`;
