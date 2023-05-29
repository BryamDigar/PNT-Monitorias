export const getFacultadMonitores = async(facultad) => {
    const url = `http://localhost:8080/monitores?facultad=${facultad}`;
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