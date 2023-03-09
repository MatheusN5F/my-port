import React from "react";

// import { Container } from './styles';

const Hobbies: React.FC = () => {
  return (
    <div>
      <section className='hobbies-section' id='hobbies'>
        <h3 className="section-title">Hobbies</h3>
        <div className="hobbies-line">
          <div className="hobbies-box">
            <ul>
              <li><div className="icon"></div></li>
              <li>Programar.</li>
            </ul>
          </div>

          <div className="hobbies-box">
            <ul>
              <li><div className="icon"></div></li>
              <li>Programar.</li>
            </ul>
          </div>

          <div className="hobbies-box">
            <ul>
              <li><div className="icon"></div></li>
              <li>Programar.</li>
            </ul>
          </div>

          <div className="hobbies-box">
            <ul>
              <li><div className="icon"></div></li>
              <li>Programar.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
