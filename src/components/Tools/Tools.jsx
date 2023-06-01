/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import cableTray from '../../assets/cableTray.png';
import ethernetCable from '../../assets/ethernetCable.png';
import keystoneJack from '../../assets/keystoneJack.png';
import networkCard from '../../assets/networkCard.png';
import patchPanel from '../../assets/patchPanel.png';
import powerStrip from '../../assets/powerStrip.png';
import switchPhoto from '../../assets/switch.png';

function Tools() {
  return (
    <div className="container mt-3">
      <h3 className="text-center">Herramientas para la instalación de Sistemas de red</h3>
      <p className="text-center">
        Esta página web tiene contenido e información sobre los diferentes componentes necesarios para la
        realización de una instalación de red de un aula de instituto. Buscamos eficiencia y rentabilidad, intentaremos que
        el precio sea lo más bajo posible pero teniendo un sistema lo suficientemente potente para poder suministrar
        perfectamente todas las aulas que queramos.
      </p>
      <div className="row ">
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={cableTray} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bandejas para cables</h5>
              <p className="card-text">
                Muy útiles para ordenar los cables y que no estén colgando ni completamente a la vista.
              </p>
              <NavLink to="/cableTrays" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={ethernetCable} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ethernet Cable</h5>
              <p className="card-text">
                Obligatorio para poder conectar un ordenador a la red y alcanzar la máxima velocidad.
              </p>
              <NavLink to="/ethernetCable" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={keystoneJack} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Keystone Jack</h5>
              <p className="card-text">
                Conector modular para proporcionar una interfaz de conexión para cables de red.
              </p>
              <NavLink to="/keystoneJack" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 md-6 col-sm-6 my-3">
          <div className="card">
            <img src={networkCard} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tarjeta de red</h5>
              <p className="card-text">
                Dispositivo hardware que se utiliza para permitir que una computadora se conecte a la red.
              </p>
              <NavLink to="/networkCard" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={patchPanel} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Patch panel</h5>
              <p className="card-text">
                Panel de conexión que permite organizar y administrar los cables de una red de área local.
              </p>
              <NavLink to="/cableTrays" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={powerStrip} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Regleta</h5>
              <p className="card-text">
                Dispositivo que proporciona múltiples salidas de enchufe para conectar y distribuir energía.
              </p>
              <NavLink to="/cableTrays" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-6 my-3">
          <div className="card">
            <img src={switchPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Switch</h5>
              <p className="card-text">
                Dispositivo que proporciona múltiples salidas de enchufe para conectar y distribuir energía.
              </p>
              <NavLink to="/cableTrays" className="btn btn-primary">Más información</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
