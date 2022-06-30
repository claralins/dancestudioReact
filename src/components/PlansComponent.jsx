import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderPlanItem({ plan }) {
  return (
    <Card outline className="card-styles">
      <Link to={`/plans/${plan.id}`}>
        <CardTitle className="card-header">{plan.name}</CardTitle>
      </Link>
      <CardBody className="card-info plan-card-info">
        {plan.description}
        <br />
        <div className="price">{plan.price}</div>
      </CardBody>
    </Card>
  );
}

function Plans(props) {
  const plans2 = props.plans.map((plan) => {
    return (
      <div key={plan.id} className="col-xs-6 col-md-4">
        <RenderPlanItem plan={plan} />
      </div>
    );
  });
  return (
    <div className="container plans-container">
      <h3 className="classes-header text-center">OPTIONS</h3>
      <div className="row">{plans2}</div>
      <br />
      <hr />
      <div className="row">
        <div className="col">
          <h3 className="classes-header text-center">DETAILS</h3>
          <ul className="offset-1">
            <li>Your first class at Movemento Studio is free! </li>
            <li>
              Cancellations and refunds are available for qualifying customers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plans;
