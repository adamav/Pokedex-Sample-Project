import { RootState } from "store/store";

export const getPokemonSearched = (state:RootState) => state.pokedex.pokemonData;