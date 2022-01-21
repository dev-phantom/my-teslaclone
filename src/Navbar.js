import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return ( 
        <nav>
            <div className="main-flex">
                <div className="first-flex">
                    <span>tesla</span>
                </div>
                <div className="items-flex">
                    <Link to="#!">Model S</Link>
                    <Link to="#!">Model 3</Link>
                    <Link to="#!">Model X</Link>
                    <Link to="#!">Model Y</Link>
                    <Link to="#!">Solar Roofs</Link>
                    <Link to="#!">Solar Panels</Link>
                </div>
                <div className="others-flex">
                    <Link to="#!">Shop</Link>
                    <Link to="#!">Account</Link>
                    <Link to="#!">Menu</Link>
                </div>
                {isOpen && <div className="mobile-flex">
                <button onClick={handleClick} ><FaBars /></button> 
                    <Link to="#!">Model S</Link>
                    <Link to="#!">Model 3</Link>
                    <Link to="#!">Model X</Link>
                    <Link to="#!">Model Y</Link>
                    <Link to="#!">Solar Roofs</Link>
                    <Link to="#!">Solar Panels</Link>
                    <Link to="#!">Shop</Link>
                    <Link to="#!">Account</Link>
                    <Link to="#!">Menu</Link>
                </div>
                }
                <div className="menu-btn">
                    <button onClick={handleClick} ><FaBars /></button> 
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
