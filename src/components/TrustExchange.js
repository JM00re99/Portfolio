import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import figma from "../assets/img/Figma.png";
import illustrator from "../assets/img/Illustartor.png";
import Persona from "../assets/img/Persona.png";
import Empathy from "../assets/img/EmpathyMap.png";
import Stakeholdermap from "../assets/img/Stakeholdermap.png";
import MindMap from "../assets/img/MindMap.png";
import StoryBoard from "../assets/img/StoryBoard.png";
import UserflowDiagram from "../assets/img/UserflowDiagram.png";
import SitMap from "../assets/img/SitMap.png";
import ValueProposition from "../assets/img/ValProsition.png";
import Wireframe1 from "../assets/img/WireFrame1.png";
import Wireframe2 from "../assets/img/WireFrame2.png";
import Wireframe3 from "../assets/img/WireFrame3.png";
import Wireframe4 from "../assets/img/WireFrame4.png";
import UserTesting from "../assets/img/UserTesting.png";
import TrustExchangePreview from "../assets/img/TrustExchangePreview.mov";

export const TrustExchange = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let textContent = '';

  if (scrollPosition < 300) {
    textContent = 'Trust Exchange ';
  } else if (scrollPosition < 600) {
    textContent = '1. Problem statement that was created using the below persona John';
  } else if (scrollPosition < 1500) {
    textContent = '2. The person and empathy map that was created to understand the user';
  } else if (scrollPosition < 2400) {
    textContent = '3. Brainstroming possible solution';
  } else if (scrollPosition < 3200) {
    textContent = '4. Mapping out the stakeholder envolved in this project';
  } else if (scrollPosition < 4200) {
    textContent = '5. Below story displays how the solution helps solve the problem statement';
  } else if (scrollPosition < 5200) {
    textContent = '6. The userflow and site maps out the navigation of the App';
  } else if (scrollPosition < 6000) {
    textContent = '7. The First wireframe is low fidelity but displays the initial idea';
  } else if (scrollPosition < 7100) {
    textContent = '8. The secound and thrid wireframe is higher fidelity and you get a real sense of how the app will look';
  } else if (scrollPosition < 7600) {
    textContent = '9. Is the final wireframe with all the details in it';
  } else if (scrollPosition < 8600) {
    textContent = '10. The value prosition displays the value the App brings to the user ';
  } else if (scrollPosition < 9400) {
    textContent = '11. User testing as a result of testing the app with users ';
  } else {
    textContent = 'Finished prototype';
  }

  return (
    <React.Fragment>
      <section className="TrustExchangePopUp" id="TrustExchangePopUp">
      
        <h2
          style={{
            fontWeight: 'bold',
            position: 'fixed',
            top: '30px',
            left: 0,
            width: '100%',
            padding: '30px',
            backgroundColor: 'white',
            zIndex: 999,
            textAlign: 'center',
          }}
        >
          {textContent}
        </h2>
      </section>
  

      {/* Skills used */}
      <section className="TrustExchangeSkillsUsed" id="TrustExchangeSkillsUsed">
        <div className="text-dark">
          <h2 style={{ fontWeight: 'bold' }}>Skills Used</h2>
        </div>
        <br />
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
            <div className="TrustExchangeSkillsCard rounded" id="TrustExchangeSkills">
                <div className="card-body text-center pt-3 pb-3">
                  <img src={figma} alt="Figma" style={{ width: '55px', height: 'auto' }} />
                  <h3 className="card-title mb-3">Figma</h3>
                  <p className="card-text">
                    Figma was used to create a prototype for this App
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="TrustExchangeSkillsCard rounded" id="TrustExchangeSkills">
                <div className="card-body text-center pt-3 pb-3">
                  <img src={illustrator} alt="Illustrator" style={{ width: '55px', height: 'auto' }} />
                  <h3 className="card-title mb-3">Illustrator</h3>
                  <p className="card-text">
                    Illustrator was used to create the graphics in the App
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="TrustExchangeSkills" id="TrustExchangeSkills">
          <h2 style={{ fontWeight: 'bold' }}>Problem Statement</h2>
          <br></br>
          <p className="lead" style={{ textAlign: 'center' }}>
            John, age 30, is a tech-savvy office worker who consumes all his news through social media.
            John struggles to distinguish between what information is trustworthy on these platforms and what information is biased to a particular side.
            John is looking for a solution that will allow him to quickly identify what information he can trust and if this information is biased to any side.
          </p>
      </section>

      {/* Persona */}
      <section className="TrustExchangeProblem" id="TrustExchangeProblem">
        <div className="container text-light">
          <div className="row align-items-md-center">
            <div className="col-md">
              <h2 style={{ fontWeight: 'bold' }}>Persona</h2>
              <br></br>
              <img className="img-fluid" src={Persona} alt="Persona" style={{ width: '88%', height: 'auto' }} />
            </div>
            <div className="col-md">
              <h2 style={{ fontWeight: 'bold' }}>Empathy Map</h2>
              <br></br>
              <img className="MaterialProblem img-fluid" src={Empathy} alt="Empathy Map" style={{ width: '88%', height: 'auto' }} />
            </div>
            
          </div>
        </div>
      </section>

      

      {/* Mind Map */}
      <section className="TrustExchangeSkills" id="TrustExchangeSkills">
        <div className="container text-light">
          <h2 style={{ fontWeight: 'bold' }}>Mind Map</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={MindMap} alt="Mind Map" />
        </div>
      </section>

      {/* Stakeholder Map */}
      <section className="TrustExchange" id="TrustExchange">
       
          <h2 style={{ fontWeight: 'bold' }}>Stakeholder Map</h2>
          <br></br>
          <img className="img-fluid rounded" src={Stakeholdermap} alt="Material Problem" />
      
      </section>

      {/* Story Board */}
      <section className="TrustExchangeSkills" id="TrustExchangeSkills">
          <h2 style={{ fontWeight: 'bold' }}>Story Board</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={StoryBoard} alt="Story Board" />
    
      </section>

      {/* Userflow Site Map */}

      <section className="TrustExchange" id="TrustExchange">
     
          <div className="row align-items-md-center">
            <div className="col-md">
              <h2 style={{ fontWeight: 'bold' }}>Userflow Diagram</h2>
           
              <img className="img-fluid rounded" src={UserflowDiagram} alt="Userflow Diagram" style={{ width: '87%', height: 'auto' }} />
            </div>
            <div className="col-md">
              <h2 style={{ fontWeight: 'bold' }}>Site Map</h2>
          
              <img className="img-fluid rounded" src={SitMap} alt="Site Map" style={{ width: '100%', height: 'auto' }} />
            </div>
          
          </div>
      </section>


      {/* Wireframe Development */}
      <section className="TrustExchangeSkills" id="TrustExchangeSkills">
        
          <h2 style={{ fontWeight: 'bold' }}>Wireframe Development</h2>
          <img className="MaterialProblem img-fluid" src={Wireframe1} alt="Wireframe 1" />
          
          <img className="MaterialProblem img-fluid" src={Wireframe2} alt="Wireframe 2" />
          <br></br><br></br>
          <img className="MaterialProblem img-fluid" src={Wireframe3} alt="Wireframe 3" />
          <br></br><br></br>
          <img className="MaterialProblem img-fluid" src={Wireframe4} alt="Wireframe 4" />
      
      </section>

       {/* Value Proposition */}
       <section className="TrustExchange" id="TrustExchange">

          <h2 style={{ fontWeight: 'bold' }}>Value Proposition</h2>
          <br />
          <img className="img-fluid rounded-image" src={ValueProposition} alt="Value Proposition" />
        
      </section>

      {/* User Testing */}
      <section className="TrustExchangeSkills" id="TrustExchangeSkills">
        <div className="container text-dark">
          <h2 style={{ fontWeight: 'bold' }}>User Testing</h2>
          <br />
          <img className="MaterialProblem img-fluid" src={UserTesting} alt="User Testing" />
        </div>
      </section>

      {/* Website preview */}
      <section className="TrustExchange" id="TrustExchange">
        <div className="container align-items-md-center justify-content-md-between">
          <div className="row align-items-md-center">
          <div className="col-md">
          <h2 style={{ fontWeight: 'bold' }}>Final Solution</h2>
            <p>The Trust Exchange social media app enables users to express their opinions on various topics and categorize them as either for, against, or common. The app verifies if posts are placed in the correct category and provides an error message if they are not. Additionally, users can vote on each post to indicate its reliability, which is displayed through a poll showing the percentage of users who consider it reliable or unreliable. This feature allows users to quickly assess the reliability of posts while swiping through them.</p>
              <Button href="https://www.figma.com/proto/SNkYekUgxkqzTO4CRzH3UQ/Trust-Exchange-final-design?page-id=0%3A1&type=design&node-id=20-2735&viewport=511%2C427%2C0.06&scaling=scale-down&starting-point-node-id=20%3A2735" variant="primary">See Full Project</Button>
            </div>
            <div className="col-md">
              <video src={TrustExchangePreview} controls autoPlay muted style={{ width: '50%', height: 'auto', borderRadius: '45px' }}>
                Your browser does not support the video tag.
              </video>
            </div>
            
          </div>
        </div>
      </section>

    </React.Fragment>
  );
};

export default TrustExchange;
