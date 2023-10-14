import React from 'react'
import "./About.css"
import { SiFiles } from "react-icons/si";
import { GiAchievement } from "react-icons/gi";
import Card from './Card';
import me from "../../assets/me.png"
const About = () => {
  return (
    <div className="container about-container" id="about">

      <h5 className='section-heading-text'>Get to know </h5>
      <h2 className='section-heading'>About Me</h2>
      <div className="about-main-container">
        <div className="about-left-container">
          <div className="outer-img-div">
            <div className="middle-img-div">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
    
      <div className="about-right-container">
      <div className="card-container">
        <Card element={<GiAchievement />} heading={"Experience"} text={"Fresher"} />
        <Card element={<SiFiles />} heading={"projects"} text={"5+ projects"} />
        </div>
        <p class="about-details">Hii I am Subhadip. I recently completed my b.tech in ECE  from Bankura Unnayani Institute of Engineering. I am passionate and dedicated frontend web developer with a strong desire to kick-start my career in the industry. As a fresher, I bring a fresh perspective, a hunger to learn, and a drive to create beautiful and intuitive user experiences.</p>
        <a href="#contact" ><button class="btn btn-2">Let's Talk</button>
          </a></div>
       
    </div> 
   
     </div>
  )
}
export default About
