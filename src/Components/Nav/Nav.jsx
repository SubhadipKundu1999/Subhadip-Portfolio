import React from 'react'
import "./Nav.css"
import {AiOutlineHome,AiOutlineUser,AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {GrProjects} from "react-icons/gr"
import Draggable from 'react-draggable'

const Nav = () => {
  return (

<ul className="navbar">
  <a href="#"> <AiOutlineHome/> </a>
  <a href="#about"> <AiOutlineUser/> </a>
  <a href="#experience"> <BiBook/> </a>
  <a href="#service"> <RiServiceLine/> </a>
  <a href="#portfolio"> <AiOutlineFundProjectionScreen/> </a>
  <a href="#contact"> <BiMessageSquareDetail/> </a>
</ul>

  )
}

export default Nav
