import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export const IconGIT = styled(AiFillGithub)`
  color: #9d4edd;
  font-size: 1.3em;
  cursor: pointer;
`;

export const IconLinkd = styled(AiOutlineLinkedin)`
  color: #9d4edd;
  font-size: 1.3em;
  cursor: pointer;
  text-align: center;
`;

export const IconYt = styled(AiOutlineYoutube)`
  color: #9d4edd;
  font-size: 1.3em;
  cursor: pointer;
`;

export const IconInsta = styled(AiOutlineInstagram)`
  display: flex;
  color: #9d4edd;
  font-size: 1.3em;
  cursor: pointer;
  text-align: center;
`;

export const IconTwitt = styled(AiOutlineTwitter)`
  color: #9d4edd;
  font-size: 1.3em;
  cursor: pointer;
`;

export const HeroStyle = styled.div`
  & section.title div.title-div div.title-container h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  }
  & section.title div.title-div div.title-container h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  & section.title div.title-div div.title-container ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 0;
    font-size: 14px;
  }
  .title-container > ul > li > a{
    display: inline-flex;
    margin: 0.5em;
    align-items: center;
  }
  & section.title img.profile {
    display: flex;
    margin: 0 auto;
    width: 30%;
    height: 30%;
    border-radius: 50%;
  }
  & .section-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }
  & a {
    color: #ccc;
  }
  & h3 {
    color: #ccc;
  }
  & h1 {
    color: whitesmoke;
  }
`;
