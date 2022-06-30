import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container about-container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="about-header text-center">Who we are</h3>
            <p>
              Hi! I'm Clara Lins, a brazilian Frontend Developer based in
              Virginia and soon moving to California. I created this website
              using my knowledge of{" "}
              <strong>HTML, CSS, Bootstrap and React</strong>.
            </p>
            <p>
              This website was created for a fictional business for learning
              purposes only; none of the products and services displayed here
              are actually offered.
            </p>
          </div>
          <div className="col-sm-8">
            <img className="about-img" src="/assets/img/beach.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
