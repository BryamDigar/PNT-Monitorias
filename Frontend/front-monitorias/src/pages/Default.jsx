import Error404 from "./Styles/Error404.png"
export const Default = () => {
    return ( 
        <>
        <div className="d-flex justify-content-center" >
            <img src={Error404} />
        </div>
        <div>
            <h2>Lo siento, la pagina buscada no existe.</h2>
        </div>
        </>
    )
}