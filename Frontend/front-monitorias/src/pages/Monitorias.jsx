import { useState } from "react"
import {  FormularioMonitor } from "../ComponentesMonitorias/FormularioMonitor";
import { TablaMonitor } from "../ComponentesMonitorias/TablaMonitor";

export const Monitorias = () => {
    const [monitores, setMonitores] = useState([]);
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("");
    const [habilidades , setHabilidades] = useState("");

    const agregarMonitor = (monitor) => {
        setMonitores([...monitores,monitor]);
    }

    const borrarMonitor = (id) => {
        let opcion = window.confirm("¿Realmente desea borrar al Monitor?");
        if(opcion){
            let nuevaLista = monitores.filter(Monitores => monitores.id !== id);
            setMonitores(nuevaLista);
        }
    }
    return (
        <>
        <h1>Crear Monitor</h1>
        <FormularioMonitor agregar={(monitor) => {agregarMonitor(monitor)}} nombre={nombre} semestre={semestre} facultad={facultad} habilidades={habilidades} setNombre={(event)=>setNombre(event)} setSemestre={(event)=>setSemestre(event)} setFacultad={(event)=>setFacultad(event)} setHabilidades={(event)=>setHabilidades(event)}/>
        <TablaMonitor listaMonitores={monitores} borrarMonitor={borrarMonitor}/>
        </>
        )
}