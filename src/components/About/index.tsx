import React from "react";

import { Aboutme } from "./styles";

const About: React.FC = () => {
  return (
    <div className="Container">
      <Aboutme>
      <section className="about">
        <div className="about-container">
          <h3>Sobre mim</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque velit velit, volutpat semper dignissim dictum,
            imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse
            potenti. Ut semper sagittis ligula et lacinia.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque velit velit, volutpat semper dignissim dictum,
            imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse
            potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis
            venenatis, egestas metus vitae, aliquet metus.
          </p>
        </div>
      </section>
      </Aboutme>
    </div>
  );
};

export default About;
