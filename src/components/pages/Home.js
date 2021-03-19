
import React from "react";
// import pic from "../../Images/newbackground.png"
import Fade from "react-reveal/Fade"
import './Header.scss';




function Home() {
  return (
   
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm Jane Sferrazza
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
            
              </h1>
              <h1>
               
               A Full Stack Developer
              </h1>
              
            </div>
          </Fade>
          <Fade bottom>
            <p></p>
          </Fade>
          <Fade bottom>
          <a href="mailto:jane.sferrazza888@gmail.com">
          CONNECT WITH ME
          </a>
             
          
          </Fade>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
