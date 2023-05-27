import { Outlet, Link } from "react-router-dom";

export const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/Monitorias">Monitorias</Link>
          </li>
          <li>
            <Link to="/Reservas">Reservas</Link>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}