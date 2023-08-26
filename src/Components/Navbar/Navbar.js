import React, {useState, useEffect} from 'react';
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
    <div className='navbar'>
        <div className='navigation'>      
      {(screenWidth > 800) && (<a  href= "/" id = 'Navbar-left' className='link-item'>TECHBOARD.</a> )}
      {(screenWidth <= 800) && (<img src = {require('../assests/navbar-left.png')} alt ="Not_found" className='link-item'></img> )}
        <a href= "/club" className='link-item'>CLUBS</a>
        <a href= "/Events" className='link-item'>EVENTS</a>
        <a href= "/Team" className='link-item'>TEAM</a>
        <a href= "/Dotlink" className='link-item'>DOTLINK</a>
        </div>
        <div className='navbar-right'>
          <img src = {require('../assests/NavbarRight.jpg')} alt ="Not_found"  id='logo'></img>
        </div>

    </div>
    
  );
}