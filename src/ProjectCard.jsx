import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div class="ui raised card">
        <div class="image">
          <img src={project.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>
          <div class="description">{project.description}</div>
          <div className="link"><a href={project.link} target="_blank">Project's Github</a></div>
          <div className="link"><a href={project.link2} target="_blank">Project Site</a></div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;