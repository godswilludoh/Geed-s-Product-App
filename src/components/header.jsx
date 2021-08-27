import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa"


function Header() {
    return (
        <nav>
            <div className="logo">Geed.</div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <span className="fa"><FaSearch /></span>
                <span className="fa"><FaShoppingBasket /> </span>               
            </div>
        </nav>
    )
}

export default Header;