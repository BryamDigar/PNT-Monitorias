export const putMonitoria = async(monitoria) => {
    const url = `http://localhost:8080/monitorias/actualizar/${monitoria.idMonitoria}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            idMonitor: monitoria.idMonitor,
            materia: monitoria.materia,
            fecha: monitoria.fecha,
            hora: monitoria.hora
        })
    });
    const data = await resp.json();
    alert(data.data)
}