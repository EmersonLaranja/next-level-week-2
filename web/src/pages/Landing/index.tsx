import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      console.log(response.data);
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="logo Proffy" />
            <h2>Sua plataforma de estudos online</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="study" className="study">
              Estudar
              <img src={studyIcon} alt="Botão para solicitar aulas" />
            </Link>

            <Link to="give-classes" className="give-classes">
              Dar aulas
              <img src={giveClassIcon} alt="Botão para dar aulas" />
            </Link>
          </div>

          <span className="total-connections">
            Total de {totalConnections} conexões já realizadas
            <img src={purpleHeartIcon} alt="purple heart icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
