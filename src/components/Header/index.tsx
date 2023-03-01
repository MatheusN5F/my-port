import React from "react";
import Image from "next/image";

import { Container, Icon } from "./styles";

const Header: React.FC = () => {
  return (
    <Container id="Home">
      <Image
        src={"/Logo.svg"}
        width={100}
        style={{ width: 100 }}
        height={60}
        quality={100}
        alt={""}
      ></Image>
      <nav>
        <ul>
          <li>
            <a className="fixed" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>Students</a>
          </li>
          <li>
            <a href="#About">About me</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <p>
              <Icon />
            </p>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
