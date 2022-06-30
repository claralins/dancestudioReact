import React, { Component } from "react";
import Contact from "./Contact";
import Quotes from "./QuotesComponent";
import { QUOTES } from "../shared/quotes";
import HomeDescription from "./HomeDescription";

function RenderVideo() {
  return (
    <div className="vid-container">
      <video src="/assets/video/street-ballet.mov" width="100%" loop autoplay />
      <div class="overlay">
        <p className="text-center">
          Let's achieve your goals,
          <span className="vid-header-color">together</span>.
        </p>
      </div>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: QUOTES,
    };
  }
  render() {
    return (
      <>
        <RenderVideo />
        <HomeDescription />
        {/* <Quotes quotes={this.state.quotes} /> */}

        <Contact />
      </>
    );
  }
}

export default Home;
