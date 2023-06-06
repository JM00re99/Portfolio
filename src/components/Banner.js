import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css/animate.css';
import TrackVisibility from 'react-on-screen';
import Selfie from "../assets/img/Selfy.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum, setLoopNum, setIsDeleting, setText, setDelta]);
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center justify-content-md-start">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="text-white">
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Welcome to my Portfolio</h2>
                    <h1>{`Hi! I'm Jack`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>As a highly motivated individual passionate about web development and design, I have a solid educational background in Product Design Innovation from South East Technological University. I am currently finishing a Master's in Design and Development of Digital Business from University College Cork. Through my education and self-directed learning, I have acquired proficiency in HTML, CSS, JavaScript, PHP, and Android Studio. With a focus on user-centric design and development methodologies, I am committed to creating engaging and effective web solutions that deliver results.</p>
                  </div>
                  <button onClick={() => window.location.href = '/#connect'}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={Selfie} alt="Selfie Img" style={{ width: '600px', height: 'auto' }} />
                  </div>
                )}
              </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};




