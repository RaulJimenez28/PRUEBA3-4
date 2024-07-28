import { useNavigate, useParams } from "react-router-dom";
import { getJugadoresByID } from "../helper/getJugadoresByID";

export const JugadorPage = () => {
    const { id } = useParams();
    const jugador = getJugadoresByID(id);
    const navigate = useNavigate();

    const handleReturn = () => {
        if (jugador.Tipo === 'titular') {
            navigate('/titular');
        } else if (jugador.Tipo === 'suplente') {
            navigate('/suplente');
        } else {
            navigate('/aguatero');
        }
    }

    console.log("Jugador:", jugador);

    return (
        <>
            {jugador ? (
                <div className="card">
                    <img src={`src/assets/NBA/${jugador.id}.jpg`} alt={jugador.Nombre} />
                    <div className="card-body">
                        <h2>{jugador.Nombre}</h2>
                        <div className="card-text">Equipo: {jugador.Equipo}</div>
                        <div className="card-text">Edad: {jugador.Edad}</div>
                        <div className="card-text">Descripción: {jugador.Descripcion}</div>
                        <div className="card-text">Tipo: {jugador.Tipo}</div>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" onClick={handleReturn}>
                            VOLVER
                        </button>
                    </div>
                </div>
            ) : (
                <p>Jugador no encontrado</p>
            )}
        </>
    );
}



