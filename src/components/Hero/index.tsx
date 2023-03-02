import React from "react";
import Image from "next/image";
import {
  HeroStyle,
  IconGIT,
  IconInsta,
  IconLinkd,
  IconTwitt,
  IconYt,
} from "./styles";

const Hero: React.FC = () => {
  return (
    <div className="Container">
      <HeroStyle>
        <section className="title">
          <div className="title-div">
            <Image
              className="profile"
              src={"/eu.jpeg"}
              width={100}
              height={100}
              alt={""}
            ></Image>
            <div className="title-container" id="#sobremim">
              <h1>Olá, meu nome é Fulana de Tal e construo páginas web</h1>
              <h3>
                Eu sou formada em lorem ipsum sit amet consectetur e atualmente
                estou participando no projeto Oracle ONE na Alura.
              </h3>
              <ul>
                <li>
                  <a href="">
                    Github <IconGIT className="icon"/>
                  </a>
                  <a href="">
                    Instagram <IconInsta className="icon"/>
                  </a>
                  <a href="">
                    Github <IconGIT className="icon"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </HeroStyle>
    </div>
  );
};

export default Hero;
