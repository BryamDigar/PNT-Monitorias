import { useNavigate  } from 'react-router-dom';
import "../Tabla.css"

export const TablaMonitoria = ({ listaMonitorias, borrarMonitoria, monitoriaStatus, reservarMonitoria }) => {

    const navigate = useNavigate();
    const enviarId = (idMonitor) => {
        console.log(idMonitor)
        navigate('/InfoMonitor', { state: { idMonitor } });
    }
    return(
        <>
        <table className="table table-striped">
            <thead className="table-info">
                <tr>
                    <th scope="col">Id Monitoria</th>
                    <th scope="col">Id Monitor</th>
                    <th scope="col">Informacion Monitor</th>
                    <th scope="col">Materia</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaMonitorias.map((monitoria) => <tr key={monitoria.idMonitoria}>
                        <td>{monitoria.idMonitoria}</td>
                        <td>{monitoria.idMonitor}</td>
                        <td>
                        <button className="btn btn-secondary" onClick={() => enviarId(monitoria.idMonitor)}>Ver monitor</button> 
                        </td>
                        <td>{monitoria.materia}</td>
                        <td>{monitoria.fecha}</td>
                        <td>{monitoria.hora}</td>
                        <td>
                        <button className="btn btn-success" onClick={() => reservarMonitoria(monitoria)}>Reservar</button>
                        <button className="btn btn-primary" onClick={()=> monitoriaStatus(monitoria)}>Editar</button> 
                        <button className="btn btn-danger" onClick={()=>borrarMonitoria(monitoria.idMonitoria)}>Eliminar</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        </>
    )
}