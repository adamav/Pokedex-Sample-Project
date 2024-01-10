import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchForPokemonAPI } from "./pokedex.api";

export const searchForPokemon = createAsyncThunk(
    'pokedex/searchForPokemon',
    searchForPokemonAPI
);