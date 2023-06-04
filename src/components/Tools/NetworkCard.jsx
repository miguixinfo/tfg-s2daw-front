/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import networkCard2 from '../../assets/networkCard2.png';

function NetworkCard() {
  const [networkCard, setNetworkCard] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/networkCards')
      .then((response) => {
        setNetworkCard(response.data);
      });
  }, []);

  function deleteNetworkCard(id) {
    axios.delete(`http://localhost:8080/api/networkCards/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Tarjetas de Red</h2>
      <p className="text-center">
        Una tarjeta de red, también conocida como tarjeta de interfaz de red (NIC, por sus siglas en inglés, Network Interface Card), es un componente de hardware esencial para permitir que una computadora se conecte a una red. La tarjeta de red se instala en la computadora y proporciona una interfaz para la conexión física y la comunicación de datos con otros dispositivos en la red, como servidores, enrutadores o impresoras.
        <br />
        {' '}
        <br />
        La tarjeta de red actúa como un intermediario entre la computadora y la red, permitiendo la transmisión y recepción de datos a través de la conexión. Está diseñada con puertos y controladores específicos que se ajustan a los estándares de conexión utilizados, como Ethernet o Wi-Fi. La tarjeta de red convierte los datos de la computadora en un formato adecuado para la transmisión a través de la red y viceversa, permitiendo el intercambio de información y el acceso a recursos compartidos en la red.
        <br />
        {' '}
        <br />
        Las tarjetas de red pueden variar en velocidad, capacidad inalámbrica, puertos y características adicionales. Algunas tarjetas de red están integradas directamente en la placa base de la computadora, mientras que otras son tarjetas de expansión que se pueden agregar o actualizar según sea necesario.
      </p>
      <img src={networkCard2} className="img-fluid" alt="bandeja par cables" />
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
        {networkCard?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/networkCards" onClick={() => deleteNetworkCard(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addNetworkCard" className="btn btn-primary mt-3">Añade una Tarjeta de Red</NavLink>
    </div>
  );
}

export default NetworkCard;
