/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import powerStrip2 from '../../assets/powerStrip2.png';

function PowerStrip() {
  const [powerStrip, setPowerStrip] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/powerStrips')
      .then((response) => {
        setPowerStrip(response.data);
      });
  }, []);

  function deletePowerStrip(id) {
    axios.delete(`http://localhost:8080/api/powerStrips/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Power Strips (Regleta)</h2>
      <p className="text-center">
        Un Power Strip, también conocido como regleta eléctrica, es un dispositivo que proporciona múltiples tomas de corriente eléctrica en un solo enchufe. Está diseñado para ampliar la capacidad de conexiones eléctricas disponibles en un área determinada.
        <br />
        {' '}
        <br />
        El Power Strip se compone de una carcasa con varias salidas o enchufes, y a menudo incluye un interruptor de encendido/apagado. Permite conectar múltiples dispositivos electrónicos, como computadoras, televisores, cargadores, lámparas, entre otros, a través de un único enchufe de pared.
        <br />
        {' '}
        <br />
        La regleta eléctrica es especialmente útil en situaciones donde hay una escasez de enchufes disponibles. Al utilizar un Power Strip, se evita la necesidad de utilizar múltiples enchufes y se simplifica la organización de los cables. Además, algunos modelos ofrecen características adicionales, como protección contra sobretensiones o puertos USB para cargar dispositivos móviles.
      </p>
      <img src={powerStrip2} className="img-fluid" alt="bandeja par cables" />
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
        {powerStrip?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/powerStrips" onClick={() => deletePowerStrip(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addPowerStrip" className="btn btn-primary mt-3">Añade una Regleta</NavLink>
    </div>
  );
}

export default PowerStrip;
