import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BigSoipaImg from "../assets/img/BigSoipaImg.png";
import BigSoipaVideo from "../assets/img/BigSoipaDemo.mov";
import illustrator from "../assets/img/Illustartor.png";

export const BigSoipa = () => {
return (
<React.Fragment>

<section className="BigSiopa" id="BigSiopa">
  <br></br>
  <br></br>
<h2 style={{ fontWeight: 'bold' }}>Big Soipa Project</h2>
</section>

{/* Skills used */}
  <section className="BigSiopaSkills" id="BigSiopaSkills">
  <div className="text-dark">
    <br></br>
    <h2 style={{ fontWeight: 'bold' }}>Skills Used</h2>
  </div>
  <br></br>
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="BigSiopaSkillsCard rounded" id="BigSiopaSkillsCard">  
            <div className="card-body text-center">
              <br></br>
              <div className="h1 mb-2 text-warning">
                <i className="bi bi-android2"></i>
              </div>
              <h3 className="card-title mb-3">Android studio</h3>
              <p className="card-text">
                Android studio is what the platform the app was coded on
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="BigSiopaSkillsCard rounded" id="BigSiopaSkillsCard">
            <div className="card-body text-center">
              <br></br>
            <img src={illustrator} alt="Figma" style={{ width: '55px', height: 'auto' }} />
              <h3 className="card-title mb-3">Illustractor</h3>
              <p className="card-text">
                Illustractor was used to create the graphics in the App
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  </section>

  {/* Problem*/}

    <section className="BigSiopaProject" id="BigSiopaProject">
    <div className="container">
      <div className="row align-items-md-center justify-content-md-between">
        <div className="col-md p-5 text-light">
        <h2 style={{ fontWeight: 'bold' }}>Project</h2>
        <br></br>
          <p className="lead" style={{ textAlign: 'left' }}>
          Big Siopa Inc requires you to write a shopping Android application. This application can allow the user to create a shopping list and delete and add items using a database(e.g chocolate, pizza, clothes) </p>
        </div>
        <div className="col-md p-5">
          <img className="img-fluid rounded" src={BigSoipaImg} alt="Material Problem" />
        </div>
      </div>
    </div>
  </section>

  {/* Website preview*/}

  <section className="BigSiopaPreview" id="BigSiopaPreview">
  <div className="container align-items-md-center justify-content-md-between">
    <h2 style={{ fontWeight: 'bold' }}>App Preview</h2>
    <br></br>
    <video src={BigSoipaVideo} controls autoplay muted style={{ width: '20%', height: 'auto', borderRadius: '35px' }}>
      Your browser does not support the video tag.
    </video>
  </div>
</section>

</React.Fragment>
);
};  