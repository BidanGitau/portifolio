import { Container, Row, Col } from "react-bootstrap";
import "./project.css";
import { Projectdata } from "./projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <div className="proc-head">
          <h1>Some Things I’ve Built</h1>
        </div>
        <div className="projectbackground">
          <Container fluid className="project-section">
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {Projectdata.map((project, index) => (
                  <Col
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginBottom: "5px" }}
                    className="project-card"
                  >
                    <ProjectCard key={index} {...project} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    </section>
  );
};
export default Projects;
