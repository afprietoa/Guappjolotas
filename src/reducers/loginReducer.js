import { types } from "../types/types";

//los reducers son siempre funciones que reciben dos parametros que son la accion y el estado
export const loginReducer = (state = {}, action) =>{
    // dentro del reducer colocamos un switch/case para preguntar el type que llega dentro de esa accion que se va lanzar con el action.type
    switch (action.type) {
        // se pregunta por el type del login
        // en cada case siempre hay un return
        case types.login:
            //cuando se lance la accion y el type sea login retornara el estado
            return{
                ...state,
                id: action.payload.id,
                name: action.payload.displayname

            }
    // en el default tambien hay un return, que devuelve por defecto el estado sin modificación
        default:
            return state
    }
}