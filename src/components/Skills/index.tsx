import React from "react";
import {
  Skill,
  IconPhp,
  IconJS,
  IconNode,
  IconTS,
  IconNext,
  IconEx,
  IconPsql,
  IconMongo,
  IconMySql,
} from "./styles";

const Skills: React.FC = () => {
  return (
    <div className="Container">
      <Skill>
        <section className="skills">
          <h1 className="section-title" id="skills">
            Skills
          </h1>
          <div className="skills-line">
            <div className="skills-box">
              <ul>
                <li>
                  <IconJS />
                </li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skills-box">
              <ul>
                <li>
                  <IconTS />
                </li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="skills-box">
              <ul>
                <li>
                  <IconNode />
                </li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div className="skills-box">
              <ul>
                <li>
                  <IconEx />
                </li>
                <li>ExpressJS</li>
              </ul>
            </div>
            <div className="skills-box">
              <ul>
                <li>
                  <IconNext />
                </li>
                <li>NextJS</li>
              </ul>
            </div>
            <div className="skills-box">
              <ul>
                <li>
                  <IconPhp />
                </li>
                <li>Php</li>
              </ul>
            </div>
          </div>
        </section>
      </Skill>
    </div>
  );
};

export default Skills;
