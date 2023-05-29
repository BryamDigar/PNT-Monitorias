import "./Styles/FormularioMonitor.css"

export const FormularioMonitor = ({agregar,id, nombre, semestre, facultad, habilidades, setId , setNombre , setSemestre, setFacultad, setHabilidades}) => {
    
    const guardarMonitor = (event) => {
        event.preventDefault();

        let monitor = {
            id: id,
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            habilidades:habilidades
        }
        agregar(monitor)
    }

    return (
        <>
        <form onSubmit={guardarMonitor}>
        <div className="inputs-form">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div>
                        <label htmlFor="semestre" className="labelform">Escoge tu semestre:</label>
                        <select name="semestre" id="semestre" value={semestre} className="form-select" aria-label="Default select example" form-select-border-width="10px"  onChange={(event) =>  setSemestre(event.target.value)}>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre" className="label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <label htmlFor="facultad" className="labelform">Escoge tu Facultad:</label>
                        <select name="facultad" id="facultad" value={facultad} className="form-select" aria-label="Default select example" onChange={(event) =>  setFacultad(event.target.value)} >
                            <option value=""></option>
                            <option value="COMUNICACION">COMUNICACION</option>
                            <option value="DERECHO">DERECHO</option>
                            <option value="EDUCACION">EDUCACION</option>
                            <option value="INGENIERIA">INGENIERIA</option>
                            <option value="MEDICINA">MEDICINA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="habilidades" className="label">Escribe tus habilidades</label>
                        <input type="text" className="form-control" id="habilidades" placeholder="*Matematicas, Artes, Negocios...* " value={habilidades} onChange={(event) => setHabilidades(event.target.value)} />
                    </div>
                    </div>
                </div>
            </div>
        </div>  
            <div className="BotonEnviar">
                <button id="botonEnviar" type="submit" className="btn btn-primary">Registrar</button>
            </div>
        </form>
        
        </> 
    )
}