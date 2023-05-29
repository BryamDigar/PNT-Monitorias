export const postMonitor = async(monitor) => {
    const url = "http://localhost:8080/monitores/crear"
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(monitor)
    });
    const data = await resp.json();
    alert(data.data);
}