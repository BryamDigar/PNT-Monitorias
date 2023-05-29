export const getMateriaMonitorias = async(materia) => {
    const url = `http://localhost:8080/monitorias?materia=${materia}`;
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