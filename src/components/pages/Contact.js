import React from "react";
import { Route } from "react-router-dom";

import Fade from "react-reveal/Fade"
import data from "./Janedata";
import "./contact.scss"

function Contact(props) {
  return (
    <div>
       <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s" >Contact <strong>me</strong></h2>
      {/* <div className="card bg-light mb-3"> */}
      <div className="card-body">

            {/* <div class="card-header">
              <h1 > Contact </h1>
            </div>   */}
            <div classNmae="container">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Message"></textarea>
              <div className="text-center text-md-left mt-4"> <a className="btn btn-primary waves-effect waves-light">Send</a></div>
            </div>
            </div>
      {/* </div> */}
      {/* <div class="col-md-8 mb-5"> */}
     
      {/* <div classNmae="container">
      <form>

        <div className="row">


          <div className="col-md-6">
            <div className="md-form mb-0">
              <div className="md-form mb-0">
                <input type="text" id="form41" className="form-control" />
                  <label for="form41" className="">Your name</label>
                                        </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="md-form mb-0">
                <div className="md-form mb-0">
                  <input type="text" id="form52" className="form-control" />
                    <label for="form52" className="">Your email</label>
                                        </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="form51" className="form-control" />
                    <label for="form51" className="">Subject</label>
                                    </div>
                </div>
              </div>

              <div className="row">

                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <textarea type="text" id="form76" className="md-textarea form-control" rows="3"></textarea>
                    <label for="form76" className="">Your message</label>
                  </div>
                </div>
              </div>


             
              
            </div>
             */}
                          
           
        {/* </form> */}
        {/* </div> */}
          <div className="section" id="contact">
            <div className="container">
              <div className="footer-container">
                <Fade bottom cascade>
                  <h1>Contact</h1>
                  <h2>{data.contactSubHeading}</h2>
                </Fade>
                <a className="email-link" href={`mailto:jane.sferrazza888@gmail.com`}>
            jane.sferrazza888@gmail.com
          </a>
                <div className="social-icons">
                </div>
                <span>
            Made With <icon>❤</icon> by{" "}
                  <a href="https://jane.sferrazza.io/">Jane Sferrazza</a>
                </span>
                <div class="col-md-8">
                        <ul class="contact-icons list-unstyled text-center">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>East Meadow, NY 11554, USA</p>
                            </li>
                            <li><i class="fas fa-phone fa-2x"></i>
                                <p>516-808-4553</p>
                            </li>
                            <li><i class="fas fa-envelope fa-2x"></i>
                                <p>Jane.sferrazza888@gmail.com</p>
                            </li>
                        </ul>
                    </div>          
              </div>
            </div>
          </div>
         
        </div >
  );
}

export default Contact;
