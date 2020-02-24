import React, { Component } from "react";
import axios from "axios";
import JobCard from "./JobCard";

class Cv extends Component {
  state = {
    cv: []
  };

  componentDidMount() {
    axios.get('./src/data/cvs.json')
      .then(response => {
        this.setState({
          cv: response.data
        });
      });
  }

  render() {
    const cv = this.state.cv;
    let cvList;

    if (cv.length > 0) {
      cvList = cv.map(cvs => {
        return (
          <div id={'cv-' + cvs.id} key={cvs.id}>
            <JobCard cvs={cvs} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container"> 
      <div>     
        <h1 className="ui header" id="projects-header">CV</h1><br/><br/>
        <div className="ui stackable two column grid">{cvList}</div><br/><br/><br/><br/><br/><br/>
        </div> 
      </div>
    );
  }
}

export default Cv;