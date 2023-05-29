export const deleteCancelarReserva = async(idMonitoria) => {
    const url = `http://localhost:8080/reservas/cancelar/${idMonitoria}`;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const data = await resp.json();
    alert(data.data);
}