import React from "react";
import Typical from 'react-typical'

const Hello = () => 
  {
    return (
      <div className="main container">
        <div className="background">
          <div className="title">
            <h1 id="hello">Hi, I'm Kayla Woobury</h1>
            <p>I am 
              <Typical
                loop={Infinity}
                wrapper='n'
                steps={[
                  ' an aspiring front end developer',
                  2000,
                  ' an aspiring back end developer',
                  2000,
                  ' a nature enthusiast',
                  2000,
                  ' a traveller',
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


