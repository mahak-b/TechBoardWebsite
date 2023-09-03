import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  },[])



  return (
    <div className='block'>
              
      {(screenWidth > 800) && (<div className='navbar-full'>
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
        <nav  className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? (
            <MdClose style={{ width: '32px', height: '32px' }} />
          ) : (
            <FiMenu
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          )}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
              <a  href="/" className='menu-links'>HOME</a>
              <a  href="/club" className='menu-links'>CLUBS</a>
              <a href="/Events" className='menu-links'>EVENTS</a>
              <a href="/Dotlink" className='menu-links'>DOTLINK</a>
              <a href="/News" className='menu-links'>NEWS</a>
              <a href="/Team" className='menu-links'>TEAM</a>
              
          </ul>
        </nav>
          <div className='navbar-right'>
          <img src = {require('../assests/NavbarRight.jpg')} alt ="Not_found"  id='logo'></img>
        </div>
        </div> )}
        
        
        </div>
    
  );
}