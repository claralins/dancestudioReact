import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HomeDescription = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="text-center">
            At Movemento studio, we believe{" "}
            <strong>everyone is a dancer</strong>. With a little help of{" "}
            <span className="text-highlight">
              <Link to="/team" className="link">
                <strong>qualified teachers </strong>
              </Link>
            </span>
            and encouraging classmates, you can take your moves to the next
            level.
          </p>
        </div>
      </div>
      <div className="row">
        <br />
        <div className="col">
          <Button className="home-btn">All classes</Button>
        </div>
        <div className="col">
          <Button className="home-btn">Pricing plans</Button>
        </div>
        <div className="col">
          <Button className="home-btn">Meet our team</Button>
        </div>
      </div>{" "}
      <br />
      <hr />
    </div>
  );
};

export default HomeDescription;
