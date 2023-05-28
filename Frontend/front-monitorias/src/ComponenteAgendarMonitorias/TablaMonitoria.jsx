export const TablaMonitoria = ({ listaMonitorias, borrarMonitoria, monitoriaStatus, }) => {

    return(
        <>
        <table className="table table-striped">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Id Monitoria</th>
                        <th scope="col">Id Monitor</th>
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
                            <td>{monitoria.materia}</td>
                            <td>{monitoria.fecha}</td>
                            <td>{monitoria.hora}</td>
                            <td>
                            <button className="btn btn-outline-danger" >Reservar</button>
                            <button className="btn btn-outline-info me-2" onClick={()=> monitoriaStatus(monitoria)}>Editar</button> 
                            <button className="btn btn-outline-danger" onClick={()=>borrarMonitoria(monitoria.id)}>Eliminar</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}