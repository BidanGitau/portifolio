import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import devimage from "../../assets/devbg.png";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="main-content">
        <div className="intro-section">
          <h1 className="title">
            frontend developer <br /> building things for the web.{" "}
          </h1>
          <div className="big-heading">
            I like to craft solid and scalable frontend products with great user
            experiences.
            <br />
            Currently, I’m focused on building accessible, human-centered
            products
          </div>

          <Typewriter
            options={{
              strings: [
                "Javascript",
                "Reactjs",
                "Ruby on Rails",
                "Css",
                "Bootstrap",
                "Nodejs",
                "mysql",
                "postgresql",
              ],
              autoStart: true,
              loop: true,
              deleteChars: 10,
            }}
          />

          <div class="social-icons">
            <a href="https://github.com/BidanGitau/" title="github">
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bidan-gitau-5a1840106/"
              title="linkedin"
            >
              <FiLinkedin />
            </a>

            <a href="https://twitter.com/bidan_gitau" title="twitter">
              <FiTwitter />
            </a>
            <a href="https://twitter.com/bidan_gitau" title="instagram">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="dev-container">
          <img
            src={devimage}
            alt="Enigma ot technologies"
            className="devimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
