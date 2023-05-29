export const getIdMonitor = async(id) => {
    const url = `http://localhost:8080/monitores/buscarid?id=${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const   monitoresList =   data.map( monitor => ({
        id: monitor.id,
        nombre: monitor.nombre,
        semestre: monitor.semestre,
        facultad: monitor.facultad,
        habilidades: monitor.habilidades
    }))
    
    return monitoresList;
}