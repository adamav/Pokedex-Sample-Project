import { combineReducers } from "@reduxjs/toolkit";
import pokedexReducer from "./pokedex/pokedex.reducer";


const reducers = combineReducers({

    pokedex:pokedexReducer,

})

export default reducers;