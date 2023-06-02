import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MaterialProblem from "../assets/img/MaterialProblem.png";
import MaterialRevenue from "../assets/img/MaterialRevenue.png";
import MaterialSiteMap from "../assets/img/MaterialSiteMap.png";
import MaterialVideo from "../assets/img/MaterialVideo.mov";

export const MaterialMaximise = () => {
return (
<React.Fragment>
<section className="p-5 bg-dark text-white">
  <br></br>
<h2 style={{ fontWeight: 'bold' }}>Material Maximise Project</h2>
</section>

{/* Skills used */}
  <section className="p-5 bg-light">
  <div className="text-dark">
    <h2 style={{ fontWeight: 'bold' }}>Skills Used</h2>
  </div>
  <br></br>
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-2 text-success">
                <i className="bi bi-filetype-html"></i>
              </div>
              <h3 className="card-title mb-3">HTML</h3>
              <p className="card-text">
                html was used for the pages that can be access without login in
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-2 text-success">
                <i className="bi bi-filetype-css"></i>
              </div>
              <h3 className="card-title mb-3">CSS</h3>
              <p className="card-text">
                css was used to style the website
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-2 text-success">
                <i className="bi bi-filetype-php"></i>
              </div>
              <h3 className="card-title mb-3">PHP</h3>
              <p className="card-text">
                php was used to write code to the server to work with MYSQL
              </p>
              <br></br>
              
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-2 text-success">
                <i className="bi bi-bootstrap"></i>
              </div>
              <h3 className="card-title mb-3">Bootstrap</h3>
              <p className="card-text">
                Bootstrap framework was used to style the website
              </p>
              <br></br>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Problem*/}

    <section className="p-5 bg-dark">
    <div className="container">
      <div className="row align-items-md-center justify-content-md-between">
        <div className="col-md p-5 text-light">
        <h2 style={{ fontWeight: 'bold' }}>Problem</h2>
        <br></br>
          <p className="lead" style={{ textAlign: 'left' }}>
            - 69% of construction projects go over budget by more than 10% because of bad management of labour / material budgets.<br />
            - 95% of data collected in construction industry goes unused.<br />
            - While some building material management apps currently exist, many of them are expensive, overly complex, or lack important features such as predictive analytics.<br /> 
          </p>
        </div>
        <div className="col-md ">
          <img className="MaterialProblem img-fluid rounded" src={MaterialProblem} alt="Material Problem" />
        </div>
      </div>
    </div>
  </section>

  {/* Solution*/}

  <section className="p-5 bg-light text-dark">
    <div className="container align-items-md-center justify-content-md-between">
    <h2 style={{ fontWeight: 'bold' }}>Solution</h2>
    <br></br>
          <p className="lead">
          Digital solution to help the Construction Industry better manage their building material budgets
          </p>
      <div className="row align-items-md-center justify-content-md-between">
        <div className="col-md p-5 text-dark">
        <div className="h1 mb-2 text-success">
                <i className="bi bi-clipboard2-data"></i>
              </div>
              <h3 className="card-title mb-3">Live Updates</h3>
        </div>
        <div className="col-md p-5 text-dark">
        <div className="h1 mb-2 text-success">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3 className="card-title mb-3">Predictive Technology </h3>
        </div>
        <div className="col-md p-5 text-dark">
        <div className="h1 mb-2 text-success">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h3 className="card-title mb-3">Cost Effective </h3>
        </div>
      </div>    

    </div>
  </section>

  {/* Online Revenue Model*/}

  <section className="p-5 bg-dark">
    <div className="container">
      <div className="row align-items-md-center justify-content-md-between">
        <div className="col-md p-5 text-light">
        <h2 style={{ fontWeight: 'bold' }}>Online Revenue model</h2>
          <br></br>
          <p className="lead" style={{ textAlign: 'left' }}>
          We can capture 10% of small building projects in Ireland and charge an annual subscription 
          </p>
          <div className="row align-items-md-center justify-content-md-between">
        <div className="col-md p-2 text-success">
          <h4>2,700 Mortgages in 2021</h4>
          </div>
          <div className="col-md p-2 text-success">
          <h4>€20 Monthly Subscription</h4>
          </div>
          <div className="col-md p-2 text-success">
          <h4>€54,000 Monthly Revenue</h4>
          </div>
          </div>
        </div>
        <div className="col-md">
          <img className="MaterialRevenue img-fluid rounded" src={MaterialRevenue} alt="Material Revenue" />
        </div>
      </div>
    </div>
  </section>

  {/* Website  Users */}

  <section className="p-5 bg-light">
  <div className="text-dark">
    <h2 style={{ fontWeight: 'bold' }}>Website Users</h2>
  </div>
  <br></br>
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3 text-success">
                <i className="bi bi-person-circle"></i>
              </div>
              <h3 className="card-title mb-3">General builder</h3>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3 text-success">
                <i className="bi bi-person-circle"></i>
              </div>
              <h3 className="card-title mb-3">Quanity Surveyor</h3>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3 text-success">
                <i className="bi bi-person-circle"></i>
              </div>
              <h3 className="card-title mb-3">Property developer</h3>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3 text-success">
                <i className="bi bi-person-circle"></i>
              </div>
              <h3 className="card-title mb-3">Acountant</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   {/* Key Features */}
  
   <section className="p-5 bg-dark">
  <div className="text-light">
    <h2 style={{ fontWeight: 'bold' }}>Key Features</h2>
  </div>
  <br></br>
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="card bg-success text-light">
            <div className="card-body text-center">
            
              <h3 className="card-title mb-3">Budget checker</h3>
              <p className="card-text">
                By add your project costs to the platform if allows the user to keep track of there budget.
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-success text-light">
            <div className="card-body text-center">
            
              <h3 className="card-title mb-3">Price predictor</h3>
              <p className="card-text">
              The platform takes in the data and displays it in a graph to allow the user to see when the best time to buy a certain material .
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Site Map*/}

  <section className="p-5 bg-light text-dark">
    <div className="container align-items-md-center justify-content-md-between">
    <h2 style={{ fontWeight: 'bold' }}>Site Map</h2>
      <img className="MaterialSiteMap img-fluid" src={MaterialSiteMap} alt="Site Map" />    

    </div>
  </section>

  {/* Website preview*/}

  <section className="p-5 bg-success text-light">
  <div className="container align-items-md-center justify-content-md-between">
    <h2 style={{ fontWeight: 'bold' }}>Website Preview</h2>
    <br></br>
    <video src={MaterialVideo} controls autoplay muted style={{ width: '100%', height: 'auto', borderRadius: '10px'}}>
      Your browser does not support the video tag.
    </video>
  </div>
</section>

</React.Fragment>
);
};  