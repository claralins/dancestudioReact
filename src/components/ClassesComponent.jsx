import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderClassItem({ aula }) {
  return (
    <Card className="card-styles">
      <CardImg width="100%" src={aula.image} alt={aula.name} />
      <CardImgOverlay>
        <Link className="card-img-overlay" to={`/classes/${aula.id}`}>
          <CardTitle>{aula.name}</CardTitle>
        </Link>
      </CardImgOverlay>
      <CardBody className="card-info">{aula.description}</CardBody>
    </Card>
  );
}

function Classes(props) {
  const aula2 = props.aulas.map((aula) => {
    return (
      <>
        <div key={aula.id} className="col-6 col-lg-3">
          <RenderClassItem aula={aula} />
          {""}
        </div>
      </>
    );
  });
  return (
    <div className="container classes-container">
      <h3 className="classes-header text-center">CLASSES OFFERED</h3>

      <div className="row">{aula2}</div>
    </div>
  );
}

export default Classes;
