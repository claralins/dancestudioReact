import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderPlan({ plan }) {
  return (
    <div className="col-6 col-md-3">
      <Card>
        <CardTitle>{plan.name}</CardTitle>
        <CardBody>
          <CardText>{plan.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function PlanInfo(props) {
  if (props.plan) {
    return (
      <div>
        <RenderPlan plan={props.plan} />
      </div>
    );
  }
}

export default PlanInfo;
