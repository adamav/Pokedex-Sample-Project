import { createReducer } from "@reduxjs/toolkit";
import { searchForPokemon } from "./pokedex.actions";
import { PokedexInterface } from "./pokedex.interface";


const initiatState:PokedexInterface = {
    pokemonData: null,
    isFetchingData:false,
    dataFetchedSuccessfully:false,
   
}

const pokedexReducer = createReducer(initiatState, buider =>{

    buider.addCase(searchForPokemon.pending, (state, action) =>{

        return{...state, isFetchingData:true}

    })
    .addCase(searchForPokemon.fulfilled, (state, action) =>{


        return{pokemonData:action.payload, isFetchingData:false, dataFetchedSuccessfully:true}

    })
    .addCase(searchForPokemon.rejected, (state) =>{

        
        return{...state, isFetchingData:false, dataFetchedSuccessfully: false}
    })





});


export default pokedexReducer;