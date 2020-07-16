import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
        <div class="container__nav">
            <ul>
                <li><Link to = '/'>Projects</Link></li>
                <li><Link to = '/AboutMe'> About Me</Link></li>
                <li><Link to = '/Contacts'>Contact</Link></li>
                <li><Link to = '/Resume'>Resume</Link></li>
            </ul>
        </div>
    </nav>
            </div>
            )
        }
        
export default Navbar;