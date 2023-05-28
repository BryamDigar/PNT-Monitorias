export const getReservas = async() => {
    const url = "http://localhost:8080/reservas/todos"
    const resp = await fetch(url);
    const data = await resp.json();

    const   reservasList =   data.map( reserva => ({
        idMonitoria: reserva.idMonitoria,
        idMonitor: reserva.idMonitor,
        materia: reserva.materia,
        fecha: reserva.fecha,
        hora: reserva.hora
    }))
    return reservasList;
}