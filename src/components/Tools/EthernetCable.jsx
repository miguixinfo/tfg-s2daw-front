/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ethernetCable2 from '../../assets/ethernetCable2.png';

function EthernetCable() {
  const [ethernetCable, setEthernetCable] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/ethernetCables')
      .then((response) => {
        setEthernetCable(response.data);
      });
  }, []);

  function deleteEthernetCable(id) {
    axios.delete(`http://localhost:8080/api/ethernetCables/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Cables Ethernet</h2>
      <p className="text-center">
        Un cable Ethernet es un cable de red utilizado para la transmisión de datos en redes de área local (LAN). Está compuesto por varios hilos de cobre o fibras ópticas, recubiertos por una cubierta protectora. Los cables Ethernet están diseñados para proporcionar una conexión confiable y de alta velocidad entre dispositivos como computadoras, enrutadores, conmutadores y otros dispositivos de red.
        <br />
        {' '}
        <br />
        Los cables Ethernet permiten la transferencia de datos de manera rápida y confiable, lo que es fundamental para la comunicación y el intercambio de información en una red. Proporcionan una conexión punto a punto, donde los datos se transmiten en forma de paquetes a través de los hilos conductores o las fibras ópticas. La calidad y el rendimiento del cable Ethernet son importantes para garantizar una transmisión estable y libre de interferencias.

      </p>
      <img src={ethernetCable2} className="img-fluid" alt="bandeja par cables" />
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
        {ethernetCable?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/ethernetCables" onClick={() => deleteEthernetCable(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addEthernetCable" className="btn btn-primary mt-3">Añade un cable Ethernet</NavLink>
    </div>
  );
}

export default EthernetCable;
