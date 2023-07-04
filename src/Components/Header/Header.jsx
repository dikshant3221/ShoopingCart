import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <a href="https://www.freeiconspng.com/img/28356" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/basket-cart-icon-27.png" width="350" alt="basket cart icon" /></a>
      </div>
      <div className="fa-3x">
      <i>My Fav Shopping Cart </i>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="header-buttons">
        <button>Select Address</button>
        <button>Sign In</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;