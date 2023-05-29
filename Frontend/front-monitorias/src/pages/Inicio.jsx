import { Link } from 'react-router-dom';
import ImagenInicio from "./Styles/ImagenInicio.jpeg"
import "./Styles/Inicio.css"


export const Inicio = () => {
    return (
        <>
        <div className="inicio-tab">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h1 className="titulo">¡Bienvenido a la plataforma de monitorías educativas!</h1>
                    <p className="descripcion">Aquí podrás encontrar recursos y tutorías para mejorar tus habilidades académicas.</p>
                    <Link to="/Reservas">
                        <button className="btn btn-primary">Explorar</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={ImagenInicio} alt="Fondo" className="imagen-fondo" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}