import React from "react";
import { Route } from "react-router-dom";
import Portfolio from "./Portfolio";

function Contact(props) {
  return (
     <div>
        <div className="card bg-light mb-3">
            <div className="card-body">

            <div class="card-header">
              <h1 > Contact </h1>
            </div>  
            <div classNmae="container">

              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />

              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Message"></textarea>
              <button
                type="button">Submit</button>
            </div>
            </div>
        </div>
        <Route exact path={`${props.match.url}/portofolio`} component={Portfolio} />
        </div>
  );
}

export default Contact;
