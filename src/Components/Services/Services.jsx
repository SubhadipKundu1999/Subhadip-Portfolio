import React from 'react'
import "./Services.css"
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <div className="container service-container" id="service">
      <h5 className='section-heading-text'>What I can Provide</h5>
      <h2 className='section-heading'>Services</h2>


      <div className="service-main-container">
        <div className="ui-ux">
          <h4>UI/UX  Design</h4>
          <ul className="lists">
            <li><BiCheck /> I can create custom UI with HTML and Css </li>
            <li><BiCheck /> Can convert your Figma file to actual code </li>
            <li><BiCheck /> I can create make Frontend of a WebSite using React.js </li>
          </ul>
        </div>
        <div className="webDev">
          <h4>Web Development</h4>
          <ul className="lists">
            <li><BiCheck /> I can create custom UI with HTML and Css </li>
            <li><BiCheck /> I can create Restfull API </li>
            <li><BiCheck /> Can create Backend of a Website using Node.jS and Express.Js </li>
            <li><BiCheck /> I can connect DataBase with Backend website</li>
          </ul>
        </div>
        <div className="">
          <h4>Content Writting</h4>
          <ul className="lists">
            <li><BiCheck /> Technical Content writing </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
