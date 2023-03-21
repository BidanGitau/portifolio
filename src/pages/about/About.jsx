import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <div>
        <h1>About Me</h1>
        <div className="about-details">
          <div>
            <p
              style={{
                marginTop: "50px",
                fontFamily: "  font-family: 'Courier New', Courier, monospace;",
              }}
            >
              A creative and organized FrontEnd Developer with a bachelor’s
              degree in Information Technology (IT) from Dedan Kimathi
              University of Technology.
              <span style={{ color: " #11ABB0" }}>
                My expertise includes front end and back-end software
                development, hardware maintenance and networking
              </span>
              . In addition to my technical skills, I am good communicator and
              team player that enables me to work effectively with team in
              identifying objectives and requirements for applications
            </p>
          </div>
          <div className="skill">
            <div>
              <p>
                {" "}
                Notable Technologies I’ve been working with recently for the{" "}
                <span style={{ color: "red" }}>Frontend</span>:{" "}
              </p>

              <ul className="skill-list">
                <li>HTML/CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Ruby on rails</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Git</li>
              </ul>
            </div>
            <div>
              <p>
                {" "}
                Notable Technologies I’ve been working with recently for the{" "}
                <span style={{ color: "red" }}>BackEnd</span>:{" "}
              </p>

              <ul className="skill-list">
                <li>Expressjs</li>
                <li>Ruby on rails</li>
                <li>Postgresql</li>
                <li>Node.js</li>
                <li>Mysql</li>
              </ul>
            </div>

            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
