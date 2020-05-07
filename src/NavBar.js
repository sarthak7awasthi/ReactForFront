import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => (
    <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
        <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Extra">Extra</Link>
        </li>
        </ul>
    
        
        
        

    </nav>
);

export default NavBar;