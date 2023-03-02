import React from "react";
import Image from "next/image";

import { Headin} from "./styles";

const Header: React.FC = () => {
  return (
      <div className="Container">
    <Headin>
        <section className="navbar">
          <header>
            <Image src={"/Logo.svg"} width={30} height={30} alt="" />
            <h3 className="menu-title">MatheusN5F</h3>
          </header>
          <nav>
            <ul className="menu-list">
              <li className="menu-list-item">
                <a href="#sobremim">Sobre mim</a>
              </li>
              <li className="menu-list-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="menu-list-item">
                <a href="#hobbies">Hobbies</a>
              </li>
              <li className="menu-list-item">
                <a href="#formacao">Formações e Cursos</a>
              </li>
              <li className="menu-list-item">
                <a href="#xp">Experiência</a>
              </li>
              <li className="menu-list-item">
                <a href="#contato">Contato@fulana.com</a>
              </li>
            </ul>
            <li className="menu-list-item-c">
              <a href="#contato">contato@fulana.com</a>
            </li>
          </nav>
        </section>
    </Headin>
      </div>
  );
};

export default Header;
