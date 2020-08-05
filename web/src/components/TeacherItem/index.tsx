import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/21970707?s=460&u=cc3415b690a042bc29386d8116a024c22d026043&v=4"
          alt="Emerson Laranja"
        />
        <div>
          <strong>Emerson Laranja</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        <br />
        Dolorum magnam officiis reprehenderit at dicta ex exercitationem alias
        similique.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp Icon" /> Entrar em contato
        </button>
      </footer>
    </article>
  );
}
