import { getJugadoresByTipo } from "../helper/getJugadoresByTipo"
import { JugadoresCard } from "./JugadoresCard";


export const JugadoresList = ({Tipo}) => {
    const jugadores = getJugadoresByTipo(Tipo);
  return (
    <>
        <h1>JugadoresList</h1>
        {/*<ul>
            {
                jugadores.map(aux => (
                    <li key = {aux.id}>
                        {aux.Nombre}
                    </li>
                ))
            }
        </ul>*/}

        <div className="container">
            <div className="col-md-8 offset-md-2">
            
            {
                jugadores.map(aux => (
                    <JugadoresCard key={aux.id} {...aux}/>
                ))
            }
        
            </div>
        </div>
        <br/>
            
    </>
  )
}
