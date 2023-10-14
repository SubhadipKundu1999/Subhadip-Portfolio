import React from 'react'
import "./MyProtfolio.css"
const PortfolioItem = ({title,githubLink,liveLink,img}) => {
  return (
    <div>
      <div className="protfolio-item">
          <div className="protfolio-img-div">
            <img src={img} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="protfolio-item-cta">
            <a href={githubLink} className="btn" target="blank">Github</a>
            <a href={liveLink} className="btn-primary" target="blank">Live Demo</a>
          </div> </div>
    </div>
  )
}

export default PortfolioItem
