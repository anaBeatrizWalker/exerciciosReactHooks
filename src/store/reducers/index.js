//Importando e exportando todos os reducers

import { numberReducer } from "./number"
import { userReducer } from "./user"

export function allReducers(state, action){

    let newState = numberReducer(state,action)
    return userReducer(newState, action)
}