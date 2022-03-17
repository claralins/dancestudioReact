import React, { Component } from "react";
import Home from "./Home";
import Header from "../components/HeaderComponent";
import Classes from "./ClassesComponent";
import ClassInfo from "./ClassesInfoComponent";
import Plans from "./PlansComponent";
import PlanInfo from "./PlansInfoComponent";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { AULAS } from "../shared/classes";
import { PLANS } from "../shared/plans";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aulas: AULAS,
      plans: PLANS,
    };
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };

    const AulaWithId = ({ match }) => {
      return (
        <ClassInfo
          aula={
            this.state.aulas.filter(
              (aula) => aula.id === +match.params.aulaId
            )[0]
          }
        />
      );
    };

    const PlanWithId = ({ match }) => {
      return (
        <PlanInfo
          plan={
            this.state.plans.filter(
              (plan) => plan.id === +match.params.planId
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/classes"
            render={() => <Classes aulas={this.state.aulas} />}
          />
          <Route path="/classes/:aulaId" component={AulaWithId} />
          <Route
            exact
            path="/plans"
            render={() => <Plans plans={this.state.plans} />}
          />
          <Route path="/plans/:planId" component={PlanWithId} />
          <Route path="/aboutus" component={About} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
