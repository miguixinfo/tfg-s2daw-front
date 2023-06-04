/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Swal from 'sweetalert2';

async function onHandleSubmit() {
  const data = {};
  data.name = document.getElementById('name').value;
  data.description = document.getElementById('description').value;
  data.price = document.getElementById('price').value;
  data.url = document.getElementById('url').value;

  if (data.name === '' || data.description === '' || data.price === '' || data.url === '') {
    Swal.fire({
      title: 'Rellena todos los campos!',
      text: 'Oops! Parece que te has dejado algún campo vacío',
      icon: 'info',
    });
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const request = await fetch('http://localhost:8080/api/keystoneJacks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  window.location.href = '/keystoneJacks';
}

function AddKeystoneJack() {
  return (
    <div className="container mt-5">
      <h2>Añade una KeystoneJack</h2>
      <form className="border border-4 rounded">
        <div className="mx-3 my-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mx-3 my-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <input type="text" className="form-control" id="description" />
        </div>
        <div className="mx-3 my-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="text" className="form-control" id="price" />
        </div>
        <div className="mx-3 my-3">
          <label htmlFor="url" className="form-label">Enlace (url)</label>
          <input type="text" className="form-control" id="url" />
        </div>
        <div className="mx-3 my-3">
          <button type="button" onClick={onHandleSubmit} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddKeystoneJack;
