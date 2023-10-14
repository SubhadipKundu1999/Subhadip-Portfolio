/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";
const Footer = () => {
  return (
<footer>
<ul className="footer-link">
 <li> <a href="#"> Home </a></li>
   <li><a href="#about"> About </a></li>
   <li><a href="#experience">Experience </a></li>
  <li>  <a href="#service"> Service </a></li>
   <li> <a href="#portfolio"> Protfolio</a></li>
<li>  <a href="#contact"> Contact </a></li>
</ul>
<div className="footer-social">
<a href="https://www.linkedin.com/in/subhadip-kundu-b40701220/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a> 
<a href="https://github.com/SubhadipKundu1999/"  target='_blank' rel="noreferrer"><AiFillGithub/></a>
</div>
</footer>
  )
}

export default Footer
