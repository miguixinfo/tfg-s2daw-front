import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand navbar-title text-white" to="/">INSTALACIONES AZARQUIEL</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/installations">Instalaciones</NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-light navbar-btn" to="/login">Sign in</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
