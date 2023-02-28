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

interface IGitHubImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const gitHubImage: IGitHubImage = {
  src: "https://avatars.githubusercontent.com/u/107011974?s=400&u=0e65481c61206407ce0a4f28051f07a31fe3658c&v=4",
  alt: "Sua imagem",
  width: 100,
  height: 100,
};

const Hero: React.FC = () => {
  return (
    <HeroStyle id="Hero">
      <div className="about">
        <h1>
          Olá, meu nome é MatheusN5F. <br /> Back-end Developer
        </h1>

        <p>
          Eu sou formado em <strong>Web Designer</strong> pela Prepara Curso.{" "}
          <br /> Me especializando em <strong>Back-End</strong> com{" "}
          <strong>NodeJS </strong>
        </p>
        <div className="links">
          <span>
            Github{" "}
            <p>
              <IconGIT />
            </p>
          </span>
          <span>
            LinkedIn{" "}
            <p>
              <IconLinkd />
            </p>
          </span>
          <span>
            Youtube{" "}
            <p>
              <IconYt />
            </p>
          </span>
          <span>
            Instagram{" "}
            <p>
              <IconInsta />
            </p>
          </span>
          <span>
            Twitter{" "}
            <p>
              <IconTwitt />
            </p>
          </span>
        </div>
      </div>
      <div className="imgdiv">
        <Image
          src={gitHubImage.src}
          width={gitHubImage.width}
          height={gitHubImage.height}
          alt={gitHubImage.alt}
          quality={100}
        ></Image>
      </div>
    </HeroStyle>
  );
};

export default Hero;
