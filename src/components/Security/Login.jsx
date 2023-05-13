import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  async function handleLogin() {
    const data = {};
    data.email = document.getElementById('email').value;
    data.password = document.getElementById('password').value;

    const request = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    if (response.success === 'OK') {
      localStorage.token = response.token;
      localStorage.email = data.email;
      window.location.href = 'http://127.0.0.1:5173/';
    } else {
      Swal.fire({
        title: 'Cannot Login',
        text: 'Check if you are using the correct credentials',
        icon: 'error',
      });
    }
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
            <NavLink type="button" className="btn btn-secondary" to="/register">Register</NavLink>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;
