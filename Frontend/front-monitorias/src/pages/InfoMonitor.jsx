import { useState , useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { getIdMonitor } from "../ComponentesInfoMonitor/getIdMonitoria"

export const InfoMonitor = () =>{
    const location = useLocation();
    const dato = location.state?.idMonitor;

    const [id,setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("");
    const [habilidades , setHabilidades] = useState("");

    const recibirMonitor = (monitor) => {
        console.log(monitor)
        const monitorRecibido = monitor[0]

        setId(monitorRecibido.id);
        setNombre(monitorRecibido.nombre);
        setSemestre(monitorRecibido.semestre);
        setFacultad(monitorRecibido.facultad);
        setHabilidades(monitorRecibido.habilidades);
    }

    const cargueMonitor = async (id) => {   
        const datos = await getIdMonitor(id);
        recibirMonitor(datos);
    }

    useEffect(() =>{
        cargueMonitor(dato);
    })

    return(
        <div class="card" >
        <div class="card-header">
            <h1>Monitor</h1>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <h5>Id:</h5>
                <p>{id}</p>
            </li>
            <li class="list-group-item">
                <h5>Nombre:</h5>
                <p>{nombre}</p>
            </li>
            <li class="list-group-item">
                <h5>Semestre:</h5>
                <p>{semestre}</p>
            </li>
            <li class="list-group-item">
                <h5>Facultad:</h5>
                <p>{facultad}</p>
            </li>
            <li class="list-group-item">
                <h5>Habilidades:</h5>
                <p>{habilidades}</p>
            </li>
        </ul>
        </div>
    )
}