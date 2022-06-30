import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

function RenderTeacher({ teacher }) {
  return (
    <Card outline className="card-styles">
      <div className="container">
        <div className="row">
          <div className="col-4">
            {" "}
            <CardImg height="" src={teacher.image} alt={teacher.name} />
          </div>
          <div className="col">
            {" "}
            <CardTitle className="card-header">
              {teacher.name} <br />
              {teacher.specialty}
            </CardTitle>
            <CardBody className="row">
              <div className="col">
                {" "}
                {teacher.description}
                <br />
                <br />
                <p>Years of experience: {teacher.experience}</p>
              </div>
            </CardBody>
          </div>
        </div>
      </div>
    </Card>
  );
}
function TeachersComponent(props) {
  const teachers2 = props.teachers.map((teacher) => {
    return (
      <div key={teacher.id} className="">
        <RenderTeacher teacher={teacher} />
      </div>
    );
  });
  return (
    <div className="container teachers-container">
      <h3 className="teachers-header text-center">Meet our team</h3>
      <div className="row">
        <div className="col"> {teachers2}</div>
      </div>
    </div>
  );
}

export default TeachersComponent;
