export const postMonitoria = async(monitoria) => {
    const url = "http://localhost:8080/monitorias/crear"
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(monitoria)
    });
    const data = await resp.json();
    alert(data.data);
}