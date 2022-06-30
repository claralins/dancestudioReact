import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import { Link } from "react-router-dom";

function RenderClass({ aula }) {
  return (
    <>
      <div className="col-6 col-md-3">
        <Card>
          <CardImg top src={aula.image} alt={aula.name} />
          <CardTitle className="card-header">{aula.name}</CardTitle>
          <CardBody>
            <CardText>{aula.description}</CardText>
          </CardBody>
        </Card>
      </div>
      {/* <div className="col-6 col-md-3">
        <Card>
          <CardImg top src={aula.image} alt={aula.name} />
          <CardTitle>{aula.name}</CardTitle>
          <CardBody>
            <CardText>{aula.description}</CardText>
          </CardBody>
        </Card>
      </div> */}
    </>
  );
}

function ClassInfo(props) {
  if (props.aula) {
    return (
      <div>
        <RenderClass aula={props.aula} />
      </div>
    );
  } else {
    return <div>nothing selected</div>;
  }
}

export default ClassInfo;
