import { FaStar } from "react-icons/fa"

export const CuadroCalificacion = ({isVisible, estrellas, setCalificacionActual, calificacionActual, calificacionDesplazada, colores, enviarCalificacion, cancelarCalificacion}) => {
    return (
        <>
        {isVisible &&
        <div id="divCalificar" className="card">
            <div className="card-header">
                <h2>Calificar Monitoria</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">¿Que tal te parecio la monitoria?</h5>
                <p className="card-text">Califica de 1 a 5 estrellas la monitoria</p>
                <div>
                    {estrellas.map((_,index) => {
                        return(
                            <FaStar key={index} size={24} style={{cursor: "pointer"}} onClick={() => setCalificacionActual(index+1)} color={(calificacionDesplazada || calificacionActual) >index ?colores.naranja : colores.gris}/>
                        )
                    })}
                </div>
                <button className="btn btn-outline-info me-2" onClick={() => enviarCalificacion()} >Enviar calificación</button>
                <button className="btn btn-outline-danger"  onClick={() => cancelarCalificacion()}>Cancelar</button>
            </div>
        </div>}
        </>
    )
}