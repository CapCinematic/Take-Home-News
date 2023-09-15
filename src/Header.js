import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ handleClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
          Take Home News
        </Link>
        <Link to="/" className="header-link">
          Home
        </Link>
      </div>
      <div className="header-right">
        <button onClick={() => handleClick('technology')} className="header-button">
          Technology
        </button>
        <button onClick={() => handleClick('business')} className="header-button">
          Business
        </button>
      </div>
    </header>
  );
}

export default Header;