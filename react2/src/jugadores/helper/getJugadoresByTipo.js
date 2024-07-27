import {jugadores} from '../data/jugadores';

export const getJugadoresByTipo = (Tipo) => {
    const aux = ['jugador','suplente','aguatero'];
    if (!aux.includes(Tipo)) {
        throw new Error(`El Tipo no se encuentra: "${Tipo}" `);
    }
    
    return jugadores.filter(jugador => jugador.Tipo === Tipo);
}