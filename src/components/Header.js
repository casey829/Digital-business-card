import React from "react";
import ProfileLogo from "../images/profile-logo.png"


function Header() {
    return (
        <>
        <div className="head--container">
           <img  src={ProfileLogo} alt="a profile image" />
        </div>
     </>
    )
}


export default Header;