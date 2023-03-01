import React from "react";
import { Icon } from "../Header/styles";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <div>
      <div>
        <p>Desenvolvido por MatheusN5F.</p>
        <p>&copy;2023.</p>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Footer;
