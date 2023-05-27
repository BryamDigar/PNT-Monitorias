export const putMonitor = async(monitor) => {
    const url = `http://localhost:8080/monitores/actualizar/${monitor.id}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            nombre: monitor.nombre,
            facultad: monitor.facultad,
            semestre: monitor.semestre,
            habilidades: monitor.habilidades
        })
    });
    const data = await resp.json();
}