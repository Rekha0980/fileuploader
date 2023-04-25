import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import{
    Button,
    Heading,
} from '@chakra-ui/react';

function Navbar() {
  
   
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)
    
  return (
    <div>
    <div className="navbar">
      <h2 className="logo"><Link to="/">App</Link></h2>
      <ul className="links">
        <li className="about"><Link to="/signup" spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>SignUp</Link></li>
        <li className="about"><Link to="/login" spy={true} duration={500} offset={-100} onClick={closeMenu} smooth={true}>Login</Link></li>

      </ul>
    
      </div>
     
    </div>
  );
}

export default Navbar;
