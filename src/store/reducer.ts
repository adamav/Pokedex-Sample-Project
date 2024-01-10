import { combineReducers } from "@reduxjs/toolkit";
import pokedexReducer from "./pokedex/pokedex.reducer";
import searchHistoryReducer from "./search-history/search-history.reducer";


const reducers = combineReducers({

    pokedex:pokedexReducer,
    searchHistory:searchHistoryReducer,

})

export default reducers;