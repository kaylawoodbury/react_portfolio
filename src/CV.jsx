import React, { Component } from "react";
import axios from "axios";
import CVCard from "./CVCard";

class CV extends Component {
  state = {
    cv: []
  };

  componentDidMount() {
    axios.get('./src/data/cv.json')
      .then(response => {
        this.setState({
          cv: response.data
        })
      })
  };

  render() {
    const cv = this.state.cv;
    let cvList;

    if (cv.length > 0) {
      cvList = cv.map(cv => {
        return (
          <div id={'cv-' + cv.id} key={cv.id}>
            <CVCard cv={cv} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container"> 
      <div>     
        <h1 className="ui header" id="cv-header">CV</h1>
        <h1 className="ui header" id="projects-header">Projects</h1><br/><br/>
        <div className="ui stackable 1 column grid">{projectsList}</div>
        </div> 
      </div>
    );
  }
}

export default Projects;