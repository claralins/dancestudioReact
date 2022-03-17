import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderPlanItem({ plan }) {
  return (
    <Card>
      <Link to={`/plans/${plan.id}`}>
        <CardTitle>{plan.name}</CardTitle>
        <CardBody>
          {plan.description} {plan.price}
        </CardBody>
      </Link>
    </Card>
  );
}

function Plans(props) {
  const plans2 = props.plans.map((plan) => {
    return (
      <div key={plan.id} className="col-sm-6 col-md-3 m-1">
        <RenderPlanItem plan={plan} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">{plans2}</div>
      </div>
    </div>
  );
}

export default Plans;
