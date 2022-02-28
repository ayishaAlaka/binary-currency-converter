import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
    return(
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Binary Currency Converter</div>
            <div className='navbar__item'><Link to="/">Home </Link></div>
            <div className='navbar__item'><Link to="/exchange">Exchange Rate</Link></div>
        </header>
    )
  
}

export default Header;


