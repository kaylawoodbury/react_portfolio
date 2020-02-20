import React from "react";

//import pic1 from '../overview_pic.jpg'; <img src={pic1}/>

const About = () => {
  return (
    <div className="ui main container">
      <img class="ui fluid image" src="/src/data/images/overview_pic.JPG"></img>
      <div class="ui stackable two column grid">
        <div class="column">
          
          <h1 className="ui header">About Me</h1>
          <h3 className="ui dividing header">Background</h3>
          <p>Originally from the beautiful Rocky Mountain front range in Colorado, I have been jumping locations from Boston to Berlin until landing in Stockholm.</p><br/>
          <p>I try to live a mostly whole food plant based diet and have been working systematically to inact life habits and changes to migate my environmental impact and live as sustainably as possible.</p><br/>
          <h3 className="ui dividing header">Profession and Skill-set</h3>
          <p>I obtained a BS in Geological Engineering from Colorado School of Mines with a minor in Public Affairs. This degree included the fundamental engineering courses along with experience using modelling software such as GIS and Solidworks.</p><br/>
          
          <p>Afterwards I went on to work as a consultant/database manager for 4 years. During that time I used SQL to build and manipulate data in a relational database. In this role I worked with oil and gas companies to import/manage their data, generate reports and calculate greenhouse gas emissions for EPA reporting.</p><br/> 

          <p>More recently, I have been attending a full stack coding immersive in Stockholm called Craft Academy. The primary languages we have worked with so far are Ruby and Javascript. We have also worked the the framework Rails and the javascript library React. Mixed with these, we have used HTML and CSS for styling and user veiwing.</p><br/>
          <p>For a full resume please click here *note to self, make this a link*</p>
          <h3 className="ui dividing header">Hobbies</h3>
          <p>There are so many fun and challenging things to do in life and I find that my hobbies and interests are constantly shifting. From knitting to horseback riding to photograph to piano to animation... However, my most sustained hobbies since college have been:</p>
          <ul>
            <li>Hiking</li>
            <li>Skiing</li>
            <li>Bullet Journaling</li>
            <li>Camping</li>
            <li>Reading (mostly non-fiction books and articles)</li>
            <li>Cross stitching</li>
            <li>Playing the board game GLoomhaven</li>
            <li>Rock Climbing</li>
          </ul>
          <p>There are always new skills, activities or knowledge to learn. Approaching life with an openess to explore and grow, in sometimes tangential ways, has helped me find passions and experiences I never would have found otherwise. When you surround yourself with people who ask thoughtful/challenging questions or do things you want to learn, then you can lead an active (mentally and physically) life, full of opportunity.</p>
        </div>
      </div>
    </div>
  );
};

export default About;