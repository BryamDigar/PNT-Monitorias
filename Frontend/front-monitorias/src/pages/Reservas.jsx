import { useState , useEffect } from "react"
import { getReservas } from "../ComponentesReservas/PeticionesReservas/getReservas"
import { deleteCancelarReserva } from "../ComponentesReservas/PeticionesReservas/deleteCancelarReserva"
import { deleteCalificarReserva } from "../ComponentesReservas/PeticionesReservas/deleteCalificarReserva"
import { getIdmonitoriaReserva } from "../ComponentesReservas/PeticionesReservas/getIdmonitoriaReserva"
import { TablaReservas } from "../ComponentesReservas/TablaReservas"
import { CuadroCalificacion } from "../ComponentesReservas/CuadroCalificacion"

export const Reservas = () => {
    
    const [reservas, setReservas] = useState([]);
    const [buscarId, setBuscarId] = useState(0);
    const [idReserva, setIdReserva] = useState(0);

    const estrellas = Array(5).fill(0);
    const [calificacionActual, setCalificacionActual] = useState(0);
    const [calificacionDesplazada, setCalificacionDesplazada] = useState(undefined);
    const [isVisible, setIsVisible] = useState(false);
    const colores = {
        naranja: "FFBA5A",
        gris: "a9a9a9"
    }
    

    const buscarReservaIdMonitoria = async (event) => {
        event.preventDefault();
        if(buscarId.length > 1){
            const datos = await getIdmonitoriaReserva(buscarId);
            setReservas(datos);
            console.log(datos);
        }else{
            cargueReservas();
        }
    }

    const cancelar = (idMonitoria) => {
        let opcion = window.confirm("¿Realmente desea cancelar la reserva?");
        if(opcion){
            deleteCancelarReserva(idMonitoria);
        }
    }

    const calificar = (idMonitoria) => {
        setCalificacionActual(0);
        setIdReserva(idMonitoria);
        setIsVisible(!isVisible);
    }

    const enviarCalificacion = () => {
        if(calificacionActual !== 0){
            deleteCalificarReserva(idReserva);
            setIsVisible(!isVisible);
            setIdReserva(0);
        }else{
            alert("La calificacion es de 1 a 5 estrellas, porfavor seleccione 1 como minimo")
        }
    }

    const cancelarCalificacion = () => {
        setIsVisible(!isVisible);
        setIdReserva(0);
    }

    const cargueReservas = async () => {
        const datos = await getReservas();
        setReservas(datos);
    }
    useEffect(() =>{
        if(buscarId > 1){
            console.log("materiaBuscar")
        }else{
            cargueReservas();
        }
    })
    return (
        <>
        <form onSubmit={buscarReservaIdMonitoria}>
            <div>
                <label htmlFor="idMonitoria" className="labelform">Digite el ID de la monitoria (Si quiere ver todas las reservas, borre la busqueda):</label>
                <input type="text" className="form-control" id="buscarId" placeholder="buscarId" value={buscarId} onChange={(event) => setBuscarId(event.target.value)} />
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
                <br></br>
        </form>
        <TablaReservas reservas={reservas} calificar={calificar} cancelar={cancelar}/>
        <CuadroCalificacion estrellas={estrellas} isVisible={isVisible} setCalificacionActual={setCalificacionActual} calificacionDesplazada={calificacionDesplazada}
         calificacionActual={calificacionActual} colores={colores} enviarCalificacion={enviarCalificacion} cancelarCalificacion={cancelarCalificacion}/>
        </>
    )
}