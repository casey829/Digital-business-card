import React from "react";
import Email from "../images/Mail.png";
import Linkedin from "../images/Mail.png";

function Content () {
    return (
        <> 
        <div className="content--container">
          <h3 className="main--header main--content">
            Laura Smith
        </h3>
          <h4 className="main--h4--one main--content">
            Frontend Developer
        </h4>
          <span className="main--span--two main--content">
            laurasmith.website
          </span>
        </div>
        <div className="btn--class">
         <button className="main--button  btn--email">
            <img src={Email}className="email"/>Email
         </button>
         <button className="main--button btn--linkedin">
            <img src={Linkedin} className="linkedin"/>Linkedin
         </button>
          </div>
         <div className="main--about--interest">
          <h3>About</h3>
          <p>I am a frontend developer with a
             particular interest in making things simple and automating daily tasks.
              I try to keep up with security and best practices, and am always looking 
              for new things to learn.</p>
          <h3>Interest</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
         </div>
        </>

    )
}

export default Content;