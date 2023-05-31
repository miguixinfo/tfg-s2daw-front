import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

async function onHandleRegister() {
  const data = {};
  data.name = document.getElementById('name').value;
  data.email = document.getElementById('email').value;
  data.password = document.getElementById('password').value;

  const repeatPassword = document.getElementById('repeatPassword').value;

  if (data.name === '' || data.email === '' || data.password === '') {
    Swal.fire({
      title: 'Rellena todos los campos!',
      text: 'Oops! Parece que te has dejado algún campo vacío',
      icon: 'info',
    });
    return;
  }

  if (repeatPassword !== data.password) {
    Swal.fire({
      title: '¡Comprueba tu contraseña!',
      text: 'Parece que los campos de contraseña no coinciden',
      icon: 'info',
    });
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const request = await fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  window.location.href = '/login';
}

function Register() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="text-center">Register</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="repeatPassword" placeholder="Repeat Password" />
          </div>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" onClick={onHandleRegister}>Register</button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Already have an account?
          {' '}
          <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;
