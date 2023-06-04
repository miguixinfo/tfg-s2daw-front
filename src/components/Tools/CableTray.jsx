/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import cableTray2 from '../../assets/cableTray2.png';

function CableTray() {
  const [cableTray, setCableTray] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/cableTrays')
      .then((response) => {
        setCableTray(response.data);
      });
  }, []);

  function deleteCableTray(id) {
    axios.delete(`http://localhost:8080/api/cableTrays/${id}`);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Bandejas para cables</h2>
      <p className="text-center">
        Las bandejas para cables son componentes esenciales en sistemas de cableado estructurado. Estas estructuras, generalmente hechas de metal o plástico resistente, se instalan en racks o gabinetes y tienen compartimentos para organizar y sostener los cables. Su objetivo principal es mantener los cables ordenados y evitar enredos, lo que mejora la apariencia visual y facilita el acceso para instalación, mantenimiento y reparación. Además, contribuyen a la gestión del flujo de aire y la prevención de problemas relacionados con el sobrecalentamiento.
        <br />
        {' '}
        <br />
        Las bandejas para cables proporcionan una solución efectiva para mantener los cables organizados en entornos de redes y telecomunicaciones. Con sus compartimentos y ganchos, estas estructuras aseguran que los cables estén correctamente ubicados y evitan enredos o daños. Esto facilita el manejo de los cables y ayuda a mantener un entorno ordenado y seguro. Al mismo tiempo, las bandejas para cables mejoran el flujo de aire en los racks o gabinetes, ayudando a prevenir el sobrecalentamiento de los equipos electrónicos. En resumen, las bandejas para cables son esenciales para una gestión eficiente de los cables y para garantizar un rendimiento óptimo de los sistemas de cableado.

      </p>
      <img src={cableTray2} className="img-fluid" alt="bandeja par cables" />
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
        {cableTray?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.description} className="px-2">{item.description}</td>
              <td key={item.price} className="px-2">{item.price}</td>
              <td key={item.url} className="px-2">
                <a href={item.url}>{item.url}</a>
              </td>
              <td key={item.id} className="px-2">
                <a href="/cableTrays" onClick={() => deleteCableTray(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <NavLink to="/addCableTray" className="btn btn-primary mt-3">Añade una bandeja para cables</NavLink>
    </div>
  );
}

export default CableTray;
