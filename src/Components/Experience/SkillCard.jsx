import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
const SkillCard = ({skill, status}) => {
  return (
    <div className='skill-card'>
<div className="l-card">
<BsPatchCheckFill/>
</div>
<div className="r-card">
    <h4>{skill}</h4>
    <p>{status}</p>
</div>
      
    </div>
  )
}

export default SkillCard
