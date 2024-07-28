import {Link} from "react-router-dom"

export const JugadoresCard = ({id,Nombre,Equipo,Edad,Descripcion,Tipo}) => {
const imgSrc = `src/assets/NBA/${id}.jpg`;
    return (
    <>
      <div className="card">
          <div className="row">
            <div className="col-md-4">
                <img src= {imgSrc} alt="" className="img-card" />
            </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">{Nombre}</div>
                        <div className="card-text">{Tipo}</div>
                        <div className="card-text">Equipo: {Equipo}</div>
                        <div className="card-text">Descripcion: {Descripcion}</div>
                        <div className="card-text">Edad: {Edad}</div>
                        <Link to={`/jugadores/${id}`}> Ver Mas...</Link>
                        
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
