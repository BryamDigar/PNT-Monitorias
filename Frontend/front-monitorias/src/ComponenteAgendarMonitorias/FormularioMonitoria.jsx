export const FormularioMonitoria = ({ agregarMonitoria, idMonitoria, idMonitor, materia, fecha, hora, setIdMonitoria, setIdMonitor, setMateria, setFecha, setHora }) =>{

    const guardarMonitoria = (event) => {
        event.preventDefault();

        let monitoria = {
            idMonitoria: idMonitoria,
            idMonitor: idMonitor,
            materia: materia,
            fecha: fecha,
            hora: hora
        }

        agregarMonitoria(monitoria)
    }
    return(
        <>
        <form onSubmit={guardarMonitoria}>
            <div className="form-group">
                <label htmlFor="idMonitor" className="label">ID Monitor:</label>
                <input type="number" className="form-control" id="idMonitor" placeholder="idMonitor" value={idMonitor} onChange={(event) => setIdMonitor(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="materia" className="label">Materia:</label>
                <select name="materia" id="materia" value={materia} className="form-select" aria-label="Default select example" form-select-border-width="10px"  onChange={(event) =>  setMateria(event.target.value)} style={{ width: "500px" }}>
                    <option value=""></option>
                    <option value="PROGRAMACION">PROGRAMACION</option>
                    <option value="CALCULO">CALCULO</option>
                    <option value="FISICA">FISICA</option>
                    <option value="EPIDEMIOLOGIA">EPIDEMIOLOGIA</option>
                    <option value="ANATOMIA">ANATOMIA</option>
                    <option value="OPERACIONES">OPERACIONES</option>
                    <option value="ESCRITURA">ESCRITURA</option>
                    <option value="FOTOGRAFIA">FOTOGRAFIA</option>
                    <option value="HISTORIA">HISTORIA</option>
                    <option value="LEYES">LEYES</option>
                    <option value="JUICIO">JUICIO</option>
                    <option value="JURISDICCION">JURISDICCION</option>
                    <option value="APREDIZAJE">APREDIZAJE</option>
                    <option value="DIDACTICA">DIDACTICA</option>
                    <option value="PEDAGOGIA">PEDAGOGIA</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="fecha" className="label">Fecha:</label>
                <input type="date" className="form-control" id="fecha" placeholder="fecha" value={fecha} onChange={(event) => setFecha(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="hora" className="label">Hora:</label>
                <input type="time" className="form-control" id="hora" placeholder="hora" value={hora} onChange={(event) => setHora(event.target.value)}/>
            </div>
            <button id="botonEnviar" type="submit" className="btn btn-primary">Registrar</button>
        </form>
        </>
    )
}