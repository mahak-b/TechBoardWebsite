import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css';
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  },[])



  return (
    <div>
              
      {(screenWidth > 800) && (<div className='navbar'>
      <div className='navigation'><a  href= "/" id = 'Navbar-left' className='link-item'>TECHBOARD.</a>
      <a href= "/club" className='link-item'>CLUBS</a>
      <a href= "/Events" className='link-item'>EVENTS</a>
      <a href= "/Team" className='link-item'>TEAM</a>
      <a href= "/Dotlink" className='link-item'>DOTLINK</a>
      <a href= "/News" className='link-item'>NEWS</a>
      </div>
      <div className='navbar-right'>
          <img src = {require('../assests/NavbarRight.jpg')} alt ="Not_found"  id='logo'></img>
        </div>

    </div>
       )}
      {(screenWidth <= 800) && (
      <div className='nav-mob'>
        {/* <img src = {require('../assests/navbar-left.png')} alt ="Not_found" className='link-item'></img> */}
        <DropdownButton id="dropdown-basic-button" title={ <Hamburger size={20}/> }>
              <Dropdown.Item  href="/">HOME</Dropdown.Item>
              <Dropdown.Item  href="/club">CLUBS</Dropdown.Item>
              <Dropdown.Item href="/Events">EVENTS</Dropdown.Item>
              <Dropdown.Item href="/Dotlink">DOTLINK</Dropdown.Item>
              <Dropdown.Item href="/News">NEWS</Dropdown.Item>
              <Dropdown.Item href="/Team">TEAM</Dropdown.Item>
              <Dropdown.Item href="/contact-us">CONTACT US</Dropdown.Item>
              
          </DropdownButton>
          <div className='navbar-right'>
          <img src = {require('../assests/NavbarRight.jpg')} alt ="Not_found"  id='logo'></img>
        </div>
        </div> )}
        
        
        </div>
    
  );
}