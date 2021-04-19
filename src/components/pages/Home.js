
import React from "react";
import Fade from "react-reveal/Fade"
import './Header.scss';






function Home() {
  return (
  
    <Fade bottom>
<div className="bgimg bgimg-1 w3-display-container" id="home">

     <div className="w3-display-middle title" > 
        <span className="w3-center w3-black w3-xlarge w3-wide">
            <span className="w3-hide-small">HELLO, I'M</span>
            <span> Jane Sferrazza</span>
            
            <span className="w3-hide-small"> FULL STACK WEB DEVELOPER</span>
            <div><a href="mailto:jane.sferrazza888@gmail.com">
           CONNECT WITH ME
          </a></div>
        </span>
     </div> 
</div> 

{/* <div class="w3-row-padding w3-center w3-section"> */}
            <div class="w3-col m4">
                    <div class="card"> 
                           
                            <h2 class="card__title">Get Lost</h2>
                            <p class="card__text">Hiking app utilizing Firebase and API calls to allow a user to find, store, and track their favorite hiking trails.</p>
                            <a class="card__btn" href="https://github.com/scotrenz/GetLost" target="_blank" class="">Demo</a>
                            <a class="card__btn" href="https://github.com/GetLost-Project/GetLost-Project" target="_blank" class=""><i class="fa fa-github fa-2x"></i></a>
                          </div>
            </div>
        </Fade>
  );
}

export default Home;
