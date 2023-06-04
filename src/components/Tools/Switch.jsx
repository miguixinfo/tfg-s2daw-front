/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import switch2 from '../../assets/switch2.png';

function Switch() {
  const [sw, setSw] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/switchs')
      .then((response) => {
        setSw(response.data);
      });
  }, []);

  function deleteSwitch(id) {
    axios.delete(`http://localhost:8080/api/switchs/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Switchs</h2>
      <p className="text-center">
        Un switch, también conocido como conmutador, es un dispositivo fundamental en redes de área local (LAN) que permite la interconexión de dispositivos dentro de una red. Actúa como un punto central para la transferencia de datos entre computadoras, servidores, impresoras y otros dispositivos conectados en la red.
        <br />
        {' '}
        <br />
        El switch facilita la comunicación entre los dispositivos al recibir y enviar datos a través de los puertos de red. Analiza la dirección de destino de los datos y los envía únicamente al dispositivo correspondiente, lo que mejora la eficiencia de la red y evita la congestión de datos.
        <br />
        {' '}
        <br />
        El switch puede tener diferentes configuraciones de puertos, desde modelos básicos con unos pocos puertos hasta switches de alta capacidad con múltiples puertos. Además, puede soportar diferentes velocidades de conexión, como 10/100/1000 Mbps (Ethernet), y tener capacidades de gestión y configuración avanzadas.
      </p>
      <img src={switch2} className="img-fluid" alt="bandeja par cables" />
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
        {sw?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/switchs" onClick={() => deleteSwitch(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addSwitch" className="btn btn-primary mt-3">Añade un cable Ethernet</NavLink>
    </div>
  );
}

export default Switch;
