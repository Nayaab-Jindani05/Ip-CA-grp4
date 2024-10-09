import React from 'react';
import './Header.css';

const Header = ({ setActiveComponent }) => {
  console.log("Header is rendered"); // Debugging log

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h2>
            Goodwill
            <span>Foundation</span>
          </h2>
        </div>

        <div className="nav-buttons">
          <button onClick={() => setActiveComponent("ImgDisplay")}>Image Display</button>
          <button onClick={() => setActiveComponent("AboutUs")}>About Us</button>
          <button onClick={() => setActiveComponent("HelpCard")}>Help Card</button>
          <button onClick={() => setActiveComponent("Vision")}>Our Vision</button>
          <button onClick={() => setActiveComponent("Partner")}>Our Partners</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
