import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./project.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        boxShadow: "2px  2px  1px 1px #64ffda",
        color: " #8892b0",
      }}
    >
      <Card.Img variant="top" src={props.imgUrl} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div class="social-icons">
          <a href={props.ghLive} target="_blank" title="github">
            <FiGithub />
          </a>
          <a href={props.ghLink} target="_blank" title="Live Link ">
            <FiExternalLink />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
