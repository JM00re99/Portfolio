import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/MaterialMaximise.png";
import projImg2 from "../assets/img/BigSoipa.png";
import projImg3 from "../assets/img/TrustExchange.png";
import colorSharp2 from "../assets/img/Background-projects.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Material Maximise",
      description: "HTML, CSS, PHP, Bootstrap",
      imgUrl: projImg1,
      url: "/ProjectMaterialMaxisime" // Add the URL here
    },
    {
      title: "Big Siopa",
      description: "Android Studio",
      imgUrl: projImg2,
    },
    {
      title: "Trust Exchange",
      description: "Figma",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className="font-weight-bold">Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="text-dark">
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first"><br></br>
                    <Row>
                      <Col md={4}>
                      <h3>Material Maximise</h3>
                        <img src={projImg1} alt="Material Maximise" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                        <br></br><br></br>
                        <Button href="/ProjectMaterialMaxisime" >See Full Project</Button>
                      </Col>
                      <Col md={4}>
                        <h3>Big Siopa</h3>
                        <img src={projImg2} alt="Big Soipa" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                        <br></br><br></br>
                        <Button href="/ProjectBigSoipa" >See Full Project</Button>
                      </Col>
                      <Col md={4}>
                        <h3>Trust Exchange</h3>
                        <img src={projImg3} alt="Trust Exchange" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                        <br></br><br></br>
                        <Button href="/ProjectTrustExchange">See Full Project</Button>
                      </Col>
                    </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img className="background-image" src={colorSharp2} alt="Color Sharp2" />
    </section>
  );
};
