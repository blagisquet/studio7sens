import React from 'react';
import accueil from '../../images/accueil.jpg';
import './Navbar.scss';


function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src={accueil} width="112" height="28" />
        </a>

        <label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>
      <input type="checkbox" id="nav-toggle-state" />
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
      </a>

          <a className="navbar-item">
            Documentation
      </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
        </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
          </a>
              <a className="navbar-item">
                Jobs
          </a>
              <a className="navbar-item">
                Contact
          </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
          </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
          </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;