import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/NAVBAR.scss';



const NAVBAR = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-brand">
                <Link to='/home' className="navbar-logo">Food Nona  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                </svg></Link>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    <span className="navbar-icon"></span>
                </button>
            </div>
            <ul className="navbar-links">
                <li ><Link className="navbar-link" to="/home">HOME</Link></li>
                <li ><Link className="navbar-link" to="/food">FOOD</Link></li>
                <li ><Link className="navbar-link" to="/promotion">PROMOTION</Link></li>
                <li ><Link className="navbar-link" to="/beverages">BEVERAGES</Link></li>
                <li ><Link className="navbar-link" to="/delivery">DELIVERY</Link></li>
                <li ><Link className="navbar-link" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default NAVBAR;