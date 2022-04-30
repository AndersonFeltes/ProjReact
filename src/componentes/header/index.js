import React from 'react';
import { Link } from 'react-router-dom'
//importando a estilização do header (AreaHeader é o nome do componente)
import { AreaHeader }from './style';

function Header(){
    return(
        <AreaHeader>
          <div className="container">
            <div className="logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
              <nav>
                <ul>
                  <li><Link to="/page">Início</Link></li>
                  <li><Link to="/config">Configurações</Link></li>
                  <li><Link to="/logout">Sair</Link></li>
                </ul>
              </nav>
          </div>
        </AreaHeader>
    )
}
export default Header;