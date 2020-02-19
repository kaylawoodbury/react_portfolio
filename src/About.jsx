import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";
//import pic1 from '../overview_pic.jpg'; <img src={pic1}/>

const About = () => {
  return (
    <div className="ui main container">
      
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife primaryColor='#12283a' height='200px' />
        </div>
        <div class="column">
          
          <h1 className="ui header">About Me</h1>
          <h3>Background</h3>
          <p>Originally from the beautiful Rocky Mountain front range in Colorado, I have been jumping locations from Boston to Berlin until landing in Stockholm.</p><br/>
          <h3>Profession and Skillset</h3>
          <p>I obtained a BS in Geological Engineering from Colorado School of Mines with a minor in Public Affairs. This degree included the fundamental engineering courses along with some modelling software such as GIS and Solidworks.</p><br/>
          
          <p>Then, I went on to work as a consultant/database manager for 4 years. During that time I used SQL to build and manipulate data in a relational database. In this role I worked with oil and gas companies to import/manage their data, generate reports and calculate greenhouse gas emissions for EPA reporting.</p><br/> 

          <p>More recently, I have been attending a full stack coding immersive, Craft Academy.</p><br/>
          <h3>Hobbies</h3>
        </div>
      </div>
    </div>
  );
};

export default About;