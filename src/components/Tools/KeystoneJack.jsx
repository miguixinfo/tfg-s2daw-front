/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import keystoneJack2 from '../../assets/keystoneJack2.png';

function KeystoneJack() {
  const [keystoneJack, setKeystoneJack] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/keystoneJacks')
      .then((response) => {
        setKeystoneJack(response.data);
      });
  }, []);

  function deleteKeystoneJack(id) {
    axios.delete(`http://localhost:8080/api/keystoneJacks/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Keystone Jacks</h2>
      <p className="text-center">
        Un keystone jack, también conocido como conector keystone, es un componente modular utilizado en sistemas de cableado estructurado para redes de comunicación. Se trata de un conector hembra montado en una carcasa de plástico que se inserta en un panel de conexiones.
        <br />
        {' '}
        <br />
        Los keystone jacks son ampliamente utilizados en la industria de las telecomunicaciones y la informática. Proporcionan una interfaz estandarizada para la conexión de cables de red, telefonía u otros cables de comunicación. Los jacks más comunes son los RJ-45 para cables de red Ethernet y los RJ-11 para cables telefónicos, aunque también existen keystone jacks para cables de fibra óptica u otros tipos de conexiones.

      </p>
      <img src={keystoneJack2} className="img-fluid" alt="bandeja par cables" />
      <table className="table table-primary table-bordered mb-0 mt-5">
        <thead>
          <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">DESCRIPCIÓN</th>
            <th scope="col">PRECIO</th>
            <th scope="col">ENLACE</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        {keystoneJack?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/keystoneJacks" onClick={() => deleteKeystoneJack(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addKeystoneJack" className="btn btn-primary mt-3">Añade un Keystone Jack</NavLink>
    </div>
  );
}

export default KeystoneJack;
