export const getMonitores = async() => {
    const url = "http://localhost:8080/monitores/todos"
    const resp = await fetch(url);
    const data = await resp.json();

    const   monitoresList =   data.map( monitores => ({
        id: monitores.id,
        nombre: monitores.nombre,
        semestre: monitores.semestre,
        facultad: monitores.facultad,
        habilidades: monitores.habilidades
    }))
    return monitoresList;
}