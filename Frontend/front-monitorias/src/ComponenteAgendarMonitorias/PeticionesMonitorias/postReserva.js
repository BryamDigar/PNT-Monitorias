export const postReserva = async(reserva) => {
    const url = "http://localhost:8080/reservas/crear"
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reserva)
    });
    const data = await resp.json();
    alert(data.data);
}