import { jugadores } from "../data/jugadores"

export const getJugadoresByID = (id) => {

    return jugadores.find((jugador) => jugador.id === id);
}