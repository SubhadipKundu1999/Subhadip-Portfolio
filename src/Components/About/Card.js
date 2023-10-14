import React from 'react'
import "./About.css"
const Card = ({element,heading,text}) => {
  return (
   <div className="card">
        {element}
    <h4>{heading}</h4>
    <p>{text}</p>
   </div>
  )
}
export default Card
