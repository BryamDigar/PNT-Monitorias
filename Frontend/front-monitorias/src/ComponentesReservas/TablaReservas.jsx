export const  TablaReservas = ({reservas, cancelar, calificar}) => {
    return (
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
                reservas.map((reserva) => <tr key={reserva.idMonitoria}>
                    <td>{reserva.idMonitoria}</td>
                        <td>{reserva.idMonitor}</td>
                        <td>{reserva.materia}</td>
                        <td>{reserva.fecha}</td>
                        <td>{reserva.hora}</td>
                        <td>
                        <button className="btn btn-outline-info me-2" onClick={() => calificar(reserva.idMonitoria)}>Calificar</button> 
                        <button className="btn btn-outline-danger" onClick={() => cancelar(reserva.idMonitoria)}>Cancelar</button>
                    </td>
                </tr>)
                }
            </tbody>
        </table>
        </>
    )
}