import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header-div-flex">
    <div className="header-div-size-and-space-between header-div-margin">
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default Header;
