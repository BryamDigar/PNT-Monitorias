

export const TablaMonitor = ({listaMonitores, borrarMonitor, monitorStatus}) => {


    return(
        <>
            <table className="table table-striped">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Id Monitor</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Facultad</th>
                        <th scope="col">Habilidades</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaMonitores.map((monitor) => <tr key={monitor.id}>
                            <td>{monitor.id}</td>
                            <td>{monitor.nombre}</td>
                            <td>{monitor.semestre}</td>
                            <td>{monitor.facultad}</td>
                            <td>{monitor.habilidades}</td>
                            <td> 
                            <button className="btn btn-outline-info me-2" onClick={()=> monitorStatus(monitor)}>Editar</button> 
                            <button className="btn btn-outline-danger" onClick={()=>borrarMonitor(monitor.id)}>Eliminar</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}