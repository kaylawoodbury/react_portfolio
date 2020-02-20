import React from "react";
import Typical from 'react-typical'

const Hello = () => 
  {
    return (
      <div className="main container">
        <div className="background">
          <div className="title">
            <h1 id="hello">Hi, I'm Kayla Woobury</h1>
            <p>A
              <Typical
                loop={3}
                wrapper='i'
                steps={[
                  'n aspiring front end developer',
                  2000,
                  'n aspiring back end developer',
                  2000,
                  ' nature enthusiast',
                  2000,
                  ' traveller',
                  2000
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Hello;


