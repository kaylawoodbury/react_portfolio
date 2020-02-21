import React from "react";

const JobCard = ({ cv }) => {
  return (
    <>
    <br/>
    <div id="JobCard" className="ui raised very padded text container segment">
      <div class="content">
        <div class="ui top left attached label">{cv.time}</div>
        <a class="image" href="#">
          <img class="right floated mini ui image" src={project.image}></img>
        </a>
        <h2 class="ui header">{employment.title} at {employment.name}</h2>
        <div class="description">{employment.description}</div>
      </div>
    </div>
    </>
  );
};
export default JobCard;