import React from "react";

const JobCard = ({cvs}) => {
  return (
    <>
    <br/>
    <div id="JobCard" className="ui raised very padded text container segment">
      <div class="content">
        <div class="ui top left attached label">{cvs.time}</div>
        <a class="image"  href={cvs.link} target="_blank">
          <img class="right floated tiny ui image" src={cvs.image}></img>
        </a>
        <h2 class="ui header">{cvs.title} at {cvs.name}</h2>
        <p class="description">{cvs.description}</p>
        
      </div>
    </div>
    </>
  );
};
export default JobCard;