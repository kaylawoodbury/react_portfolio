import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Cv from "./CV";
import Contact from "./Contact";
import Particles from "react-particles-js";
import { particlesOptions } from "./data/particles";




const App = () => {
  return (
    <>
     <Particles
        style={{ position: "absolute" }}
        params={particlesOptions}
      />
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
      </div>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
