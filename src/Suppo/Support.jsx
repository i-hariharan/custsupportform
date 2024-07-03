import React from "react";
import "../Suppo/Support.css";

export default function Support() {
  return (
    
      <div className="wrapper">
        <div className="form-box feedback">
          <form action="">
            <h1>Customer Support</h1>
            <br></br>
            <h2>contact information</h2>
            <div className="input-box">
              Name:<input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              Email:<input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              Mobile:<input type="text" placeholder="Mobile" required />
            </div>
            <br></br>
            <h2>Issue Details</h2>
            <div className="input-box">
              IssueName:<input type="text" placeholder="Username" />
            </div>
            <div className="input-box">
              Issue Type:<input type="email" placeholder="Email" required />
            </div>
            <div className="input-box-radio">
              Priority Level:<input type="radio" /> High <input type="radio"/> Low
            </div>
            <br></br>
            <h2>Location Details</h2>
            <div className="input-box">
              Country:<input type="text" placeholder="Username" />
            </div>
            <div className="input-box">
              Address:<textarea  placeholder="Address" className="textarea" />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2>Additional Comments</h2>
            <div className="input-box">
              <textarea  placeholder="Suggest what you want" className="textarea" />
            </div>
            <br></br>
            <br></br>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    
  );
}
