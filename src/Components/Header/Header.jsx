import React, { useState } from 'react'
import "./Header.css"
import cv from "../../assets/cv.pdf"
import me from "../../assets/subha-2.png"

import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";

const Header = () => {

  const [state, setState] = useState(true);

  const changeState = () => {
    if(state){
 document.querySelector(".camera-effect").classList.add("open");
   setState(false);
  }
  else{
    document.querySelector(".camera-effect").classList.remove("open");
    setState(true);
  } 
}
  return (
<header>
 <div className=" container header-container">
    <h5>Hello, I'm</h5>
    <h1>Subhadip Kundu</h1>
    <h5>Frontend Web Developer</h5>
    <div className="call-to-action">
    <a href={cv} download><button class="button-1"><span class="text">Downoad Cv</span></button> </a>
    <a href="#contact"> <button class="btn btn-2 header-btn-2">Let's Talk</button> </a>
    </div>
    <div className="my-img">
      <img src={me} alt="" />
    </div>
    <div className="camera-effect">
    <div id="camera">
  <div class="strip">
  </div>
  <div class="lens">
  </div>
  <div class="led">
  </div>
  <div class="click-btn" onClick={changeState}>
  click
  </div>
</div>
<div id="panel">
  <div class="pic">
    <img src={me}/>
  </div>
  <center>
    <a href="#" class="lnk">My Portfolio</a>
  </center>
</div>
<div class="shadow">
</div>
</div>


      <div className="social-icon">
     <a href="https://www.linkedin.com/in/subhadip-kundu-b40701220/" target='_blank'><AiFillLinkedin/></a> 
      <a href="https://github.com/SubhadipKundu1999/"  target='_blank'><AiFillGithub/></a>

      </div>
      <div className="scroll-down">
       <a href="#contact">Scroll Down</a> 
      </div>
   
  </div>
</header>
  )
}

export default Header
