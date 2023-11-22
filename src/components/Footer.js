import React from "react";
import Facebook from "../images/Facebook Icon.png";
import Github from "../images/GitHub Icon.png";
import Instagram from "../images/Instagram Icon.png";
import Twitter from "../images/Twitter Icon.png";

function Footer() {
    return (
    <>
    <div className="foot--container">
       <div className="foot--items">
      <img src={Facebook} alt="a facebook icon" className="foot--image"/>
      <img src={Github} alt="a github icon" className="foot--image"/>
      <img src={Instagram} alt="an instagram icon" className="foot--image"/>
      <img src={Twitter} alt="a twitter icon" className="foot--image"/>
     </div>
    </div>
    </>
    )
}

export default Footer;