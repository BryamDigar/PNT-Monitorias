export const getIdmonitoriaReserva = async(Idmonitoria) => {
    const url = `http://localhost:8080/reservas?idMonitoria=${Idmonitoria}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const   monitoriasList =   data.map( monitoria => ({
        idMonitoria: monitoria.idMonitoria,
        idMonitor: monitoria.idMonitor,
        materia: monitoria.materia,
        fecha: monitoria.fecha,
        hora: monitoria.hora
    }))
    return monitoriasList;
}