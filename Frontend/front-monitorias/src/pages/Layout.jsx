import { Outlet } from "react-router-dom";
import LogoMonitorias from "./Styles/LogoMonitorias.png"
import GitHubLogo from "./Styles/GitHubLogo.png"

import "./Styles/Layout.css"

export const Layout = () =>{
 return (
    <>
    <div>
          <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src={LogoMonitorias} width="225" height="94"/>
          </a>
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/" >Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/Monitores" >Monitores</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/Monitorias" >Monitorias</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/Reservas" >Reservas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex">
              <ul className="enviarGitHub">
                <li>
                  <img src={GitHubLogo} width="150" height="80"/>
                </li>
                <li>
                  <a className="nav-link" aria-current="page" href="https://github.com/BryamDigar/PNT-Monitorias.git" target="_blank">Ver Repositorio</a>
                </li>
              </ul>

            </div>
          </nav>

        <Outlet />
    </div>;
    </>
 )
}