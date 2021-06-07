import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-background">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">RecipeFoodFE2</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link is-active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Recipe</a>
            </li><li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
            {/* <span className="nav-indicator"></span> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;