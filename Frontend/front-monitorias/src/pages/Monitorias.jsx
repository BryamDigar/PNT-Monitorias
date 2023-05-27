import { useState , useEffect } from "react"
import {  FormularioMonitor } from "../ComponentesMonitorias/FormularioMonitor";
import { TablaMonitor } from "../ComponentesMonitorias/TablaMonitor";
import { postMonitor } from "../ComponentesMonitorias/PeticionesMonitor/postMonitor";
import { getMonitores } from "../ComponentesMonitorias/PeticionesMonitor/getMonitores";
import { deleteMonitor } from "../ComponentesMonitorias/PeticionesMonitor/deleteMonitor";

export const Monitorias = () => {
    const [monitores, setMonitores] = useState([]);
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("");
    const [habilidades , setHabilidades] = useState("");

    const agregarMonitor = (monitor) => {
        setMonitores([...monitores,monitor]);
        postMonitor(monitor)

        setNombre("");
        setSemestre("");
        setFacultad("");
        setHabilidades("")
    }

    const borrarMonitor = (id) => {
        let opcion = window.confirm("¿Realmente desea borrar al estudiante?")
        if(opcion){
            deleteMonitor(id);
        }
    }

    const cargueMonitores = async () => {
        const datos = await getMonitores();
        setMonitores(datos);
    }
    useEffect(() =>{
        cargueMonitores();
    })
    
    return (
        <>
        <h1>Crear Monitor</h1>
        <FormularioMonitor agregar={(monitor) => {agregarMonitor(monitor)}} nombre={nombre} semestre={semestre} facultad={facultad} habilidades={habilidades} setNombre={(event)=>setNombre(event)} setSemestre={(event)=>setSemestre(event)} setFacultad={(event)=>setFacultad(event)} setHabilidades={(event)=>setHabilidades(event)}/>
        <TablaMonitor listaMonitores={monitores} borrarMonitor={borrarMonitor}/>
        </>
        )
}