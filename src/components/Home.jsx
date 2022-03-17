import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// class Home extends Component {
//   render() {
//     return (
//       <React.Fragment>)}}

function RenderVideo() {
  return (
    <div className="container">
      <video src="street-ballet.mov" height="100%" autoplay loop />
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <RenderVideo />
    </div>
  );
}

export default Home;
