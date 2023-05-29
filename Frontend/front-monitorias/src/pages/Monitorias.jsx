import { useState , useEffect } from "react"
import { deleteMonitoria } from "../ComponenteAgendarMonitorias/PeticionesMonitorias/deleteMonitoria"
import { getMateriaMonitorias} from "../ComponenteAgendarMonitorias/PeticionesMonitorias/getMateriaMonitorias"
import { getMonitorias } from "../ComponenteAgendarMonitorias/PeticionesMonitorias/getMonitorias"
import { postMonitoria } from "../ComponenteAgendarMonitorias/PeticionesMonitorias/postMonitoria"
import { putMonitoria } from "../ComponenteAgendarMonitorias/PeticionesMonitorias/putMonitoria"
import { FormularioMonitoria } from "../ComponenteAgendarMonitorias/FormularioMonitoria"
import { TablaMonitoria } from "../ComponenteAgendarMonitorias/TablaMonitoria"
import { postReserva } from "../ComponenteAgendarMonitorias/PeticionesMonitorias/postReserva"

export const Monitorias = () => {

    const [monitorias, setMonitorias] = useState([]);
    const [idMonitoria,setIdMonitoria] = useState(0);
    const [idMonitor, setIdMonitor] = useState(0);
    const [materia, setMateria] = useState("");
    const [fecha , setFecha] = useState("");
    const [hora , setHora] = useState("");

    const [materiaBuscar, setMateriaBuscar] = useState("");
    const [focuMonitoria, setForcuMonitoria] = useState(null);
    const [editarMonitoriaStatus, setEditarMonitoriaStatus] = useState("");

    const agregarMonitoria = (monitoria) => {
        if(editarMonitoriaStatus.length > 1){
            putMonitoria(monitoria)
        
            setIdMonitoria(0);
            setIdMonitor(0);
            setMateria("");
            setFecha("");
            setHora("");
            setForcuMonitoria(null);
        }else{
            postMonitoria(monitoria)

            setIdMonitoria(0);
            setIdMonitor(0);
            setMateria("");
            setFecha("");
            setHora("");
            setForcuMonitoria(null);
        }
        setEditarMonitoriaStatus("");
    }

    const buscarMonitoriaMateria = async (event) => {
        event.preventDefault();
        if(materiaBuscar.length > 1){
            const datos = await getMateriaMonitorias(materiaBuscar);
            setMonitorias(datos);
            console.log(datos);
        }else{
            cargueMonitorias();
        }
    }

    const borrarMonitoria = (idMonitoria) => {
        let opcion = window.confirm("¿Realmente desea borrar al monitor?")
        if(opcion){
            deleteMonitoria(idMonitoria);
        }
    }

    const reservarMonitoria = (reserva) => {
        postReserva(reserva);
        deleteMonitoria(reserva.idMonitoria);
    }

    const monitoriaStatus = (monitoria) => {
        console.log(monitoria);
        setForcuMonitoria(monitoria);
        setEditarMonitoriaStatus("editarMonitoria");
    }
    if (focuMonitoria != null){
        setIdMonitoria(focuMonitoria.idMonitoria);
        setIdMonitor(focuMonitoria.idMonitor);
        setMateria(focuMonitoria.materia);
        setFecha(focuMonitoria.fecha);
        setHora(focuMonitoria.hora);
        setForcuMonitoria(null);
    }

    const cargueMonitorias = async () => {
        const datos = await getMonitorias();
        setMonitorias(datos);
    }
    useEffect(() =>{
        if(materiaBuscar.length > 1){
            console.log("materiaBuscar")
        }else{
            cargueMonitorias();
        }
    })

    return (
        <>
        <h1>Crear Monitoria</h1>
        <FormularioMonitoria agregarMonitoria={(monitoria) => {agregarMonitoria(monitoria)}} idMonitoria={idMonitoria} idMonitor={idMonitor} materia={materia} fecha={fecha} hora={hora}setIdMonitoria={setIdMonitoria} setIdMonitor={(event)=>setIdMonitor(event)} setMateria={(event)=>setMateria(event)} setFecha={(event)=>setFecha(event)} setHora={(event)=>setHora(event)}/>
        <form onSubmit={buscarMonitoriaMateria}>
            <div>
            <label htmlFor="materiaBuscar" className="label">Escoge la materia a buscar:</label>
                <select name="materiaBuscar" id="materiaBuscar" value={materiaBuscar} className="form-select" aria-label="Default select example" form-select-border-width="10px"  onChange={(event) =>  setMateriaBuscar(event.target.value)} style={{ width: "500px" }}>
                    <option value=""></option>
                    <option value="PROGRAMACION">PROGRAMACION</option>
                    <option value="CALCULO">CALCULO</option>
                    <option value="FISICA">FISICA</option>
                    <option value="EPIDEMIOLOGIA">EPIDEMIOLOGIA</option>
                    <option value="ANATOMIA">ANATOMIA</option>
                    <option value="OPERACIONES">OPERACIONES</option>
                    <option value="ESCRITURA">ESCRITURA</option>
                    <option value="FOTOGRAFIA">FOTOGRAFIA</option>
                    <option value="HISTORIA">HISTORIA</option>
                    <option value="LEYES">LEYES</option>
                    <option value="JUICIO">JUICIO</option>
                    <option value="JURISDICCION">JURISDICCION</option>
                    <option value="APREDIZAJE">APREDIZAJE</option>
                    <option value="DIDACTICA">DIDACTICA</option>
                    <option value="PEDAGOGIA">PEDAGOGIA</option>
                </select>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
            <br></br>
        </form>
        <TablaMonitoria listaMonitorias={monitorias} borrarMonitoria={borrarMonitoria} monitoriaStatus={monitoriaStatus} reservarMonitoria={reservarMonitoria}/>
        </>
    )
}