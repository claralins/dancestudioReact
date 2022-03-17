import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderClassItem({ aula }) {
  return (
    <Card>
      <Link to={`/classes/${aula.id}`}>
        <CardImg width="100%" src={aula.image} alt={aula.name} />
        {/* <CardImgOverlay> */}
        <CardTitle>{aula.name}</CardTitle>
        {/* </CardImgOverlay> */}
        <CardBody>{aula.description}</CardBody>
      </Link>
    </Card>
  );
}

function Classes(props) {
  const aula2 = props.aulas.map((aula) => {
    return (
      <div key={aula.id} className="col-sm-6 col-md-3 m-1">
        <RenderClassItem aula={aula} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">{aula2}</div>
      </div>
    </div>
  );
}

export default Classes;
