import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import figma from "../assets/img/Figma.png";
import illustrator from "../assets/img/Illustartor.png";
import WhosCloudera from "../assets/img/WhosCloudera.png";
import SecondaryReseach from "../assets/img/SecoundaryResearch.png";
import Users from "../assets/img/InterviewsPersonaUsers.png";
import CurrentTrialSystem from "../assets/img/CureentTrialSystem.png";
import NewTrialSystem from "../assets/img/NewTrailSystem.png";
import UserTesting from "../assets/img/UserTestingCloudera.png";
import WebPortalDemo from "../assets/img/WebPortalDemo.png";

export const Cloudera = () => {
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

  if (scrollPosition < 600) {
    textContent = 'Cloudera College Project ';
  } else if (scrollPosition < 1300) {
    textContent = '1. Who Cloudera are';
  } else if (scrollPosition < 1500) {
    textContent = '2. Overview of what was completed in this project';
  } else if (scrollPosition < 2500) {
    textContent = '3. Key points that came from the secondary research';
  } else if (scrollPosition < 3200) {
    textContent = '4. The below diagram shows Clouderas current trial system which is not user friendly, as it is complicated and not automated ';
  } else if (scrollPosition < 3900) {
    textContent = '5. Below diagram displays how the key users were decided';
  } else if (scrollPosition < 4300) {
    textContent = '6. The problem statement that was decided on after primary and secondary research';
  } else if (scrollPosition < 4900) {
    textContent = '7. The new proccess of obtaining a trial for a Cloudera customer';
  } else if (scrollPosition < 5500) {
    textContent = '8. Figma prototype of how the final solution will look and function';
  } else {
    textContent = '9. Results of user testing carried out on the Figma prototype';
  }

  return (
    <React.Fragment>
      <section className="ClouderaPopUp" id="ClouderaPopUp">
      
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
      <section className="ClouderaSkillsUsed" id="ClouderaSkillsUsed">
        <div className="text-dark">
          <h2 style={{ fontWeight: 'bold' }}>Skills Used</h2>
        </div>
        <br />
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
            <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                <div className="h1 mb-2 text-white">
                <i className="bi bi-pencil-square"></i>
              </div>
                  <h3 className="card-title mb-3">Researching</h3>
                  <p className="card-text">
                    Primary and Secondary research was carried out in this project through intervies, surveys and online research.  
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                <div className="h1 mb-2 text-white">
                <i className="bi bi-people"></i>
              </div>
                  <h3 className="card-title mb-3">User Profiling</h3>
                  <p className="card-text">
                    User profiling was carried out by creating Stakeholder map, Personas, Empathy Maps, User journey maps. 
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                <div className="h1 mb-2 text-white">
                <i className="bi bi-pencil-square"></i>
              </div>
                  <h3 className="card-title mb-3">Sketching/Prototyping</h3>
                  <p className="card-text">
                    Sketching/Prototyping was used to create wireframes and prototypes for user testing.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center g-4">
            <div className="col-md">
            <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                  <img src={figma} alt="Figma" style={{ width: '55px', height: 'auto' }} />
                  <h3 className="card-title mb-3">Figma</h3>
                  <p className="card-text">
                    Figma was used to create a prototype for this web portal.<br></br>
                    <br></br>
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                  <img src={illustrator} alt="Illustrator" style={{ width: '55px', height: 'auto' }} />
                  <h3 className="card-title mb-3">Illustrator</h3>
                  <p className="card-text">
                    Illustrator was used to create graphics in this web portal.<br></br>
                    <br></br>
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ClouderaSkillsCard rounded" id="ClouderaSkills">
                <div className="card-body text-center pt-3 pb-3">
                <div className="h1 mb-2 text-white">
                <i className="bi bi-code-slash"></i>
              </div>
                  <h3 className="card-title mb-3">Web Development</h3>
                  <p className="card-text">
                    This web portal was developed using html5, css, bootstrap, SQL, PHP and MySQL
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who is Cloudera */}
      <section className="ClouderaSkills" id="ClouderaSkills">
          <h2 style={{ fontWeight: 'bold' }}>Who is Cloudera? </h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={WhosCloudera} alt="Whos Cloudera" />
      </section>
      {/* Project overview*/}
      <section className="Cloudera" id="Cloudera">
          <h2 style={{ fontWeight: 'bold' }}>Project Overview</h2>
          <br></br>
          <p className="lead" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          As part of this project the team and I eveloped an online system to enable new customers to attain a free trial of their products. I was the project lead on the
          design and development side. Once the team and I carried out the necessary user research to identify the key pain
          points experienced by the customer. I prototyped the solution using Figma. I completed all the coding elements using
          HTML, CSS and Bootstrap for the front end of the web portal. I used PHP and MySQL for the backend. I also created a
          questionnaire using JavaScript to allow new users to decide on the most appropriate package for them.
          </p>
      </section>

       {/* Secondary Research */}
       <section className="ClouderaSkills" id="ClouderaSkills">
          <h2 style={{ fontWeight: 'bold' }}>Secondary Research</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={SecondaryReseach} alt="Secondary Reseach" />
      </section>

       {/* Current trial system */}
       <section className="Cloudera" id="Cloudera">
       
       <h2 style={{ fontWeight: 'bold' }}>Current Trial System</h2>
       <br></br>
       <img className="img-fluid rounded" src={CurrentTrialSystem} alt="Current Trial System" />
   
        </section>
        

        {/* Users */}
      <section className="ClouderaSkills" id="ClouderaSkills">
          <h2 style={{ fontWeight: 'bold' }}>Interviews - Persona - Users</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={Users} alt="Whos Cloudera" />
      </section>

      {/* Problem */}
      <section className="Cloudera" id="Cloudera">
          <h2 style={{ fontWeight: 'bold' }}>Problem Statement</h2>
          <br></br>
          <p className="lead" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            - Cloudera's current trial system is not user friendly, as it is complicated and not automated.<br></br>
            - It relies on a lot of manual input, which results in insufficient contact between teams and customers.<br></br>
            - We aim to address this by creating an automated system that allows for frictionless contact between all parties.<br></br>
          </p>
      </section>

      {/* New trial system */}
      <section className="ClouderaSkills" id="ClouderaSkills">
          <h2 style={{ fontWeight: 'bold' }}>New trial system</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={NewTrialSystem} alt="New trial system" />
      </section>

       {/* Website preview */}
       <section className="Cloudera" id="Cloudera">
        <h2 style={{ fontWeight: 'bold' }}>Figma prototype</h2>
        <br></br>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img className="MaterialProblem img-fluid rounded" src={WebPortalDemo} alt="Web Portal Demo" />
          <a href="https://www.figma.com/proto/5cP9jAnoOMAfCyZeFCHdmO/Trial-Portal?type=design&node-id=232-11648&t=AaqXNYgKGDoJwdJP-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=232%3A11648&mode=design  " className="overlay-button">See Customes Portal</a>
        </div>
      </section>

      {/* New trial system */}
      <section className="ClouderaSkills" id="ClouderaSkills">
          <h2 style={{ fontWeight: 'bold' }}>User UserTesting</h2>
          <br></br>
          <img className="MaterialProblem img-fluid" src={UserTesting} alt="User testing" />
      </section>


    </React.Fragment>
  );
};

export default Cloudera;
