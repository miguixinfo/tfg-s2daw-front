import React from 'react';
import { NavLink } from 'react-router-dom';
import aula from './assets/aula2.jpg';
import users from './assets/user-3331258_1280.png';
import servers from './assets/servidores.jpg';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">APLICACIÓN PARA LA GESTIÓN E INSTALACIÓN DEL SISTEMA DE RED</h1>

      <div className="text-center mt-4">
        <img src={aula} alt="Classroom" className="img-fluid rounded" />
      </div>

      <h2 className="text-center mt-4">Secciones de la página web</h2>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="text-center">
            <img src={users} alt="Users" className="img-fluid rounded" />
          </div>
          <h3 className="text-center mt-2">Gestión de los usuarios</h3>
          <p className="text-center"> En esta sección se podrá hacer un seguimiento de los usuarios registrados en nuestra web.</p>
          <div className="text-center">
            <NavLink to="/users" className="btn btn-primary">Acceder</NavLink>
          </div>
        </div>

        <div className="col-md-6">
          <div className="text-center">
            <img src={servers} alt="Servers" className="img-fluid rounded" />
          </div>
          <h3 className="text-center mt-2">Instalación del cableado de red</h3>
          <p className="text-center">
            En este apartado será posible indicar los los datos necesarios para sacar una estimación
            de los costes de la instalación de red
          </p>
          <div className="text-center">
            <NavLink to="/installations" className="btn btn-primary">Acceder</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
