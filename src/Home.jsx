import React from 'react';
import { NavLink } from 'react-router-dom';
import users from './assets/user-3331258_1280.png';
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
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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
