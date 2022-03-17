import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Who we are</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              placeat reiciendis, voluptates reprehenderit sit esse, minima
              maiores veniam ipsa, odio officiis id magnam. Facere fuga deserunt
              exercitationem saepe? Aut, minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Consectetur ipsam nulla eaque
              facere, molestiae doloremque quam rem ab quisquam aliquid totam
              iusto provident. Fuga nemo mollitia praesentium accusamus atque
              hic.
            </p>
          </div>
          <div className="col-sm-6">
            <Card>
              <CardTitle>
                <h3>Dance</h3>
              </CardTitle>
              <CardBody>
                <CardImg src="/assets/img/beach.jpg"></CardImg>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
