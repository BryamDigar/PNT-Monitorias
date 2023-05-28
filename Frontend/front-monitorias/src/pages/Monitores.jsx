import { useState , useEffect } from "react"
import {  FormularioMonitor } from "../ComponentesMonitorias/FormularioMonitor";
import { TablaMonitor } from "../ComponentesMonitorias/TablaMonitor";
import { postMonitor } from "../ComponentesMonitorias/PeticionesMonitor/postMonitor";
import { getMonitores } from "../ComponentesMonitorias/PeticionesMonitor/getMonitores";
import { deleteMonitor } from "../ComponentesMonitorias/PeticionesMonitor/deleteMonitor";
import { getFacultadMonitores } from "../ComponentesMonitorias/PeticionesMonitor/getFacultadMonitores";
import { putMonitor } from "../ComponentesMonitorias/PeticionesMonitor/putMonitor";

export const Monitores = () => {
    const [monitores, setMonitores] = useState([]);
    const [id,setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("");
    const [habilidades , setHabilidades] = useState("");

    const [facultadBuscar, setFacultadBuscar] = useState("");
    const [focuMonitor, setForcuMonitor] = useState(null);
    const [editarStatus, setEditarStatus] = useState("");

    const agregarMonitor = (monitor) => {
        if(editarStatus.length > 1){
            putMonitor(monitor)
        
            setId(null);
            setNombre("");
            setSemestre("");
            setFacultad("");
            setHabilidades("")
            setEditarStatus("");
            setForcuMonitor(null);
        }else{
            setMonitores([...monitores,monitor]);
            postMonitor(monitor)

            setId(null);
            setNombre("");
            setSemestre("");
            setFacultad("");
            setHabilidades("")
            setForcuMonitor(null);
        }
    }
    
    const buscarMonitorFacultad = async (event) => {
        event.preventDefault();
        if(facultadBuscar.length > 1){
            const datos = await getFacultadMonitores(facultadBuscar);
            setMonitores(datos);
            console.log(datos);
        }else{
            cargueMonitores();
        }
    }
    

    const borrarMonitor = (id) => {
        let opcion = window.confirm("¿Realmente desea borrar al monitor?")
        if(opcion){
            deleteMonitor(id);
        }
    }

    const monitorStatus = (monitor) => {
        console.log(monitor);
        setForcuMonitor(monitor);
        setEditarStatus("editar");
    }
    if (focuMonitor != null){
        setId(focuMonitor.id);
        setNombre(focuMonitor.nombre);
        setSemestre(focuMonitor.semestre);
        setFacultad(focuMonitor.facultad);
        setHabilidades(focuMonitor.habilidades);
        setForcuMonitor(null);
    }

    const cargueMonitores = async () => {
        const datos = await getMonitores();
        setMonitores(datos);
    }
    useEffect(() =>{
        if(facultadBuscar.length > 1){
            console.log("facultadBuscar")
        }else{
            cargueMonitores();
        }
    })
    
    return (
        <>
        <h1>Crear Monitor</h1>
        <FormularioMonitor agregar={(monitor) => {agregarMonitor(monitor)}} id={id} nombre={nombre} semestre={semestre} facultad={facultad} habilidades={habilidades} setId={setId} setNombre={(event)=>setNombre(event)} setSemestre={(event)=>setSemestre(event)} setFacultad={(event)=>setFacultad(event)} setHabilidades={(event)=>setHabilidades(event)}/>
        <form onSubmit={buscarMonitorFacultad}>
            <div>
                <label htmlFor="facultad" className="labelform">Escoge tu Facultad:</label>
                <select name="facultadBuscar" id="facultadBuscar" value={facultadBuscar} className="form-select" aria-label="Default select example" onChange={(event) =>  {setFacultadBuscar(event.target.value)}} style={{ width: "500px" }}>
                    <option value=""></option>
                    <option value="COMUNICACION">COMUNICACION</option>
                    <option value="DERECHO">DERECHO</option>
                    <option value="EDUCACION">EDUCACION</option>
                    <option value="INGENIERIA">INGENIERIA</option>
                    <option value="MEDICINA">MEDICINA</option>
                </select>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
                <br></br>
        </form>
        <TablaMonitor listaMonitores={monitores} borrarMonitor={borrarMonitor}  monitorStatus={monitorStatus}/>
        </>
        )
}