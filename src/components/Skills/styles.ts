import styled from "styled-components";
import { DiPhp, DiJsBadge, DiPostgresql, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

export const IconPhp = styled(DiPhp)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconJS = styled(DiJsBadge)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconNode = styled(SiNodedotjs)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;
export const IconTS = styled(SiTypescript)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconPsql = styled(DiPostgresql)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconMySql = styled(SiMysql)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconMongo = styled(DiMongodb)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconEx = styled(SiExpress)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const IconNext = styled(SiNextdotjs)`
  color: #9d4edd;
  font-size: 5em;
  margin-bottom: 10px;
`;

export const Skill = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
& section.skills div.skills-line {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-between;
}
& section.skills div.skills-line div.skills-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 16px;
    background-color: #fbfbfb;
    margin: 22px 0 22px 0;
    width: 120px;
    height: 118px;
}
& section.skills div.skills-line div.skills-box ul {
    margin: 0;
    padding: 0;

}
`;
