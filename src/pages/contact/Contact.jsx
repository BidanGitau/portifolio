import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contactbackground">
      <Container>
        <div>
          <div className="contactheead">
            <h1>Get In Touch</h1>
          </div>

          <p className="contactpara">
            {" "}
            I’m currently searching for opportunities for a front-end developer
            role. <br /> If there is any vacancy my inbox is always open.
            Whether <br /> you have any further questions or just want to say
            hi, <br /> I’ll try my best to get back to you!
          </p>
          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://wa.me/+254703947052");
            }}
          >
            Say Hello
          </button>
          <span></span>
          <hr className="line" />
          <p className="copyright">
            © Copyright 2033.
            <br />
            Designed & Built by <span>B_Dev</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
