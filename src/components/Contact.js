import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <br></br>
                <h4>Name : Jack Moore</h4>
                <h4>Phone Number : 0870636545</h4>
                <h4>Email : jackmoore632@gmail.com </h4>
                
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}