/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import users from './assets/users.png';
import servers from './assets/servidores.jpg';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';

function Home() {
  return (
    <div className="container mt-3">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡Toda la información necesaria a un click!</h5>
              <p>Informáte sobre las nuevas tecnologías del sector de Telecomunicaciones</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡Páginas de confianza!</h5>
              <p>Te redirigimos a las mejores páginas con los mejores precios disponibles.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡No te vuelvas a preocupar por dispositivos defectuosos!</h5>
              <p>Garantía en todos los productos del catálogo de nuestros colaboradores.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-3">
        <h2 className="text-center">¿Quiénes somos?</h2>
        <p className="text-center">
          Soy un alumno de un instituto de Toledo llamado I.E.S Azarquiel. Estoy terminando un ciclo superior de
          Desarrollo de Aplicaciones Web (DAW). Este instituto se compone de un total de 44 aulas, 6 laboratorios y un gimnasio. Este proyecto viene
          impulsado por la necesidad de facilitar la instalación del sistema de red Wi-Fi del centro, pues para un espacio tan grande puede llegar
          a ser tedioso. El fin de la página es facilitar la vida a los técnicos en la búsqueda de información sobre los componentes y dispositivos
          a utilizar en su trabajo.
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="text-center">
            <img src={users} alt="Users" className="img-fluid rounded" />
          </div>
          <h3 className="text-center mt-2">Gestión de los usuarios</h3>
          <p className="text-center"> En esta sección se podrá hacer un seguimiento de los usuarios registrados en nuestra web.</p>
          <div className="text-center">
            <NavLink to="/users" className="btn btn-primary my-3">Acceder</NavLink>
          </div>
        </div>

        <div className="col-md-6">
          <div className="text-center">
            <img src={servers} alt="Servers" className="img-fluid rounded" />
          </div>
          <h3 className="text-center mt-2">Herramientas</h3>
          <p className="text-center">
            En este apartado será posible ver y gestionar las herramientas disponibles para la instalación
            del sistema de red.
          </p>
          <div className="text-center">
            <NavLink to="/installations" className="btn btn-primary my-3">Acceder</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
