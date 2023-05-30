import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-bg">
      <div className="container">
        <NavLink to="/"><img src={logo} alt="" /></NavLink>
        <NavLink className="navbar-brand navbar- text-white mx-3" to="/">Instalaciones Azarquiel</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-primary navbar-button" to="/users">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary navbar-button mx-3" to="/installations">Instalaciones</NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-light navbar-btn" to="/login">Sign in</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
