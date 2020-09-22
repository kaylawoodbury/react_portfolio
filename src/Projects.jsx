import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  };

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container"> 
      <div id="projects">     
        <h1 className="ui header" id="projects-header">Projects</h1>
        <h1 className="ui header" id="projects-header">Projects</h1><br/><br/>
        <div className="ui five column grid">{projectsList}</div>
        </div> 
      </div>
    );
  }
}

export default Projects;