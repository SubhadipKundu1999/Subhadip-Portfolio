import React from 'react'
import "./Experience.css"
import SkillCard from './SkillCard'
const Experience = () => {
  return (
    <div className="container Experience-Container" id="experience">
      <h5 className='section-heading-text'>What skill I have</h5>
      <h2 className='section-heading'>My Skills</h2>
      <div className="Experience-main-container">
        <div className=" frontent-skills">
          <h3> Frontent Development</h3>
          <div className="skills-card-container">
            <SkillCard skill={"HTML"} status={"Experienced"} />
            <SkillCard skill={"JavaScript"} status={"Intermediate"} />
            <SkillCard skill={"Css"} status={"Intermediate"} />
            <SkillCard skill={"JQuery"} status={"Intermediate"} />
            <SkillCard skill={"React"} status={"Intermediate"} />
          </div>
        </div>
        <div className="backend-skills">
        <h3> Backend Development</h3>
          <div className="skills-card-container">
            <SkillCard skill={"Node Js"} status={"Experienced"} />
            <SkillCard skill={"Express Js"} status={"Intermediate"} />
            <SkillCard skill={"MongoDb"} status={"Intermediate"} />
            <SkillCard skill={"Mongoose"} status={"Intermediate"} />
            <SkillCard skill={"Rest Api"} status={"Intermediate"} />
            <SkillCard skill={"MySql"} status={"Intermediate"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
