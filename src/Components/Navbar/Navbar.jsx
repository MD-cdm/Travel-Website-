import React,{useState} from 'react'
import './navbar.css'
import { MdMargin, MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle  } from 'react-icons/ai'
import { TfiAlignJustify } from "react-icons/tfi";
import { FaWhatsapp, } from "react-icons/fa";
import { FiSend } from 'react-icons/fi'
const Navbar = () => {
  const [active, setActive] = useState('navBar')
   //Function to toggle navbar
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  //Function to remove navbar
  const removeNavbar =()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href='#' className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon" /> Travel.</h1>
          </a>
        </div>


        <div className={active}>
          <ul className="navLists flex">
            
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href="https://tinyurl.com/stexcjdy" target="_blank" rel="noopener noreferrer">BOOK NOW
            <FiSend  className="icons" />
            </a>

            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle  className="icon"/>

          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TfiAlignJustify  className="icon"/>

        </div>

      </header>
    </section>
  )
}
export default Navbar