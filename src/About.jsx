import React from "react";

//import pic1 from '../overview_pic.jpg'; <img src={pic1}/>

const About = () => {
  return (
    <div className="ui main container">
      <img class="ui fluid image" src="/src/data/images/overview_pic.JPG"></img>
      <h1 className="ui header" id="about-header">About</h1>
      
      <h3 className="ui dividing header">General</h3>
      <div class="ui stackable two column grid">
        <div class="column">
          <p>Originally from the beautiful Rocky Mountain front range in Colorado, I have been jumping locations from Boston to Berlin until landing in Stockholm during fall of 2019.</p><br/>
          <p>I try to live a mostly whole food plant based diet and have been working systematically to inact life habits and changes to migate my environmental impact.</p><br/>
          <p>I love dogs and cats. And generally love to be out in nature with friends and family, whether it be a crazy adventure or lounging lazy day. </p>
        </div>
        <div class="column">
          <img class="ui large rounded image" src="/src/data/images/colorado.JPG"/>
        </div>
      </div>

      <h3 className="ui dividing header">Profession and Skill-set</h3>
      <div class="ui stackable two column grid">
        <div class="column">
          <img class="ui medium circular image" src="/src/data/images/profile4.JPG"/>
        </div>
        <div class="column">
          <p>I obtained a BS in Geological Engineering from Colorado School of Mines with a minor in Public Affairs. This degree included the fundamental engineering courses along with experience using modelling software such as GIS and Solidworks.</p><br/>
          
          <p>Afterwards I went on to work as a consultant/database manager for 4 years. During that time I used SQL to build and manipulate data in a relational database. In this role I worked with oil and gas companies to import/manage their data, generate reports and calculate greenhouse gas emissions for EPA reporting.</p><br/> 

          <p>More recently, I completed a full stack coding immersive in Stockholm called Craft Academy. Since the bootcamp, I have been working at a start-up, Cartesio Metrics, as a Full Stack Developer and as a consultant book editor for an American author. My current techstack includes, Javascript, Ruby, CSS, HTML, React/React Native, Redux, Mobx, Ruby on Rails, Cypress, Detox. </p><br/>
          <p>For a full resume please click the link below:</p><div className="link" class="ui button"><a href=""> Resume</a></div>
        </div>
      </div>

      <h3 className="ui dividing header">Hobbies</h3>
        <p>There are so many fun and challenging things to do in life and I find that my hobbies and interests are constantly shifting. From knitting to baking to photography to piano to animation... However, my most sustained hobbies since college have been:</p>
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
        <p>There are always new skills, activities or knowledge to learn. Approaching life with an openess to explore and grow, in sometimes tangential ways, has helped me find passions and experiences I never would have found otherwise.</p>
        <div class="ui medium rounded images">
          <img src="/src/data/images/climbing.JPG"/>
          <img src="/src/data/images/baking.JPG"/>
          <img src="/src/data/images/pets.JPG"/>
        </div> <br/><br/><br/><br/> 
    </div>
  );
};

export default About;