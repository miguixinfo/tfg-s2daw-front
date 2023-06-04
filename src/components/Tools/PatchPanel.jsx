/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import patchPanel2 from '../../assets/patchPanel2.png';

function PatchPanel() {
  const [patchPanel, setPatchPanel] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/patchPanels')
      .then((response) => {
        setPatchPanel(response.data);
      });
  }, []);

  function deletePatchPanel(id) {
    axios.delete(`http://localhost:8080/api/patchPanels/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Cables Ethernet</h2>
      <p className="text-center">
        Un Patch Panel, también conocido como panel de conexiones, es un componente utilizado en sistemas de cableado estructurado para redes de comunicación. Consiste en una estructura con múltiples puertos o conectores donde se pueden conectar y organizar los cables de red.
        <br />
        {' '}
        <br />
        La función principal de un Patch Panel es proporcionar un punto centralizado para la gestión y distribución de los cables en una red. Los cables provenientes de diferentes áreas de una instalación se conectan al Patch Panel, y luego se utilizan cables más cortos, conocidos como "parches" o "cables de parcheo", para establecer conexiones con los dispositivos finales, como computadoras, servidores, enrutadores o switches.
        <br />
        {' '}
        <br />
        El Patch Panel facilita la administración y el mantenimiento del cableado, ya que permite cambios y conexiones fácilmente modificables sin tener que acceder a los cables de origen. Además, proporciona una forma organizada y ordenada de gestionar los cables, lo que ayuda a minimizar la confusión y el enredo.

      </p>
      <img src={patchPanel2} className="img-fluid" alt="bandeja par cables" />
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
        {patchPanel?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/patchPanels" onClick={() => deletePatchPanel(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addPatchPanel" className="btn btn-primary mt-3">Añade un Patch Panel</NavLink>
    </div>
  );
}

export default PatchPanel;
